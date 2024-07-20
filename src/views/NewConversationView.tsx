import { FormEvent, ReactElement, createRef, useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { startConversation } from "../model/conversations";
import { useClient } from "../hooks/useClient";
import { useQuery } from "@airstack/airstack-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Spinner } from "@nextui-org/react";

TimeAgo.addDefaultLocale(en);

export default function NewConversationView(): ReactElement {
  const client = useClient()!;
  const searchParams = useParams()

  console.log(searchParams)
  // We're using an uncontrolled component here because we don't need to update
  // anything as the user is typing.
  //
  // See https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs
  const addressInputRef = createRef<HTMLInputElement>();

  const [error, setError] = useState<string | undefined>();
  const [addresses, setAddresses] = useState<string[]>([]);

  const navigate = useNavigate();

  function validateAddress(): string | undefined {
    const address = addressInputRef.current?.value || "";

    if (address.trim().length == 0) {
      addressInputRef.current?.classList.add("horizontal-shake");
      setTimeout(() => {
        addressInputRef.current?.classList.remove("horizontal-shake");
      }, 1000);

      addressInputRef.current?.focus();

      return;
    }

    return address;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const address = validateAddress();
    if (!address) return;

    try {
      const conversation = await startConversation(client, address);
      navigate(`/c/${conversation.topic}`);
    } catch (e) {
      setError(String(e));
    }
  }

  function onAdd() {
    const address = validateAddress();
    if (!address) {
      return;
    }

    setAddresses((addresses) => [address, ...addresses]);

    addressInputRef.current!.value = "";
    addressInputRef.current?.focus();
  }

  const getFuserQuery = `
query MyQuery ($Identity: [Identity!]) {
  Socials(
    input: {filter: {dappName: {_eq: farcaster}, identity: {_in: $Identity}}, blockchain: ethereum}
  ) {
    Social {
      id
      chainId
      blockchain
      dappName
      dappSlug
      dappVersion
      userId
      userAddress
      userCreatedAtBlockTimestamp
      userCreatedAtBlockNumber
      userLastUpdatedAtBlockTimestamp
      userLastUpdatedAtBlockNumber
      userHomeURL
      userRecoveryAddress
      userAssociatedAddresses
      followerCount
      followingCount
      profileBio
      profileDisplayName
      profileImage
      profileUrl
      profileName
      profileTokenId
      profileTokenAddress
      profileCreatedAtBlockTimestamp
      profileCreatedAtBlockNumber
      profileLastUpdatedAtBlockTimestamp
      profileLastUpdatedAtBlockNumber
      profileTokenUri
      isDefault
      identity
    }
  }
}
`;

  const { data, loading } = useQuery(getFuserQuery, { "Identity": [searchParams.id] }, { cache: false });

  console.log(data)

  useEffect(() => { }, [data])

  return (
    <div className="p-4 pt-14 min-h-[60vh]">
      <div>
        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="p-4 border rounded w-full md:w-1/2 mt-2 bg-red-500 text-white w-fit mx-auto">
              This Farcaster account hasn't signed up to the XMTP Network. Why don't you invite him/her so you can start a conversation right away.
            </div>
          )}


          {data ? data?.Socials?.Social.map((item: any, index: any) => <div key={index} className='border-2 w-fit mx-auto'>
            <img src={`${item.profileImage}`} className='w-96 h-48' alt="" />
            <div className='p-2'>
              <h1 ><span className='font-bold text-lg mt-1'>Name: </span>{item.profileName}</h1>
              <p className='py-2 max-w-72'><span className='font-bold text-lg mt-1'>Desc: </span>{item.profileBio}</p>
              <div className='flex gap-x-3'>
                <p><span className='font-bold'>Followers: </span>{item.followerCount}</p>
                <p><span className='font-bold'>Following: </span>{item.followingCount}</p>
              </div>
            </div>
          </div>) : loading ? <div className='w-fit mx-auto'> <Spinner size="lg" color="default" /></div> : <div className='text-center text-lg'><p>Loading Image. Might take a while...</p></div>}

          <label className="hidden">
            <span className="block text-xs my-2">
              Who {addresses.length > 0 && "else "}do you want to message with?
            </span>

            <input
              autoFocus
              ref={addressInputRef}
              type="text"
              className="border p-2 w-full md:w-1/2 rounded shadow-sm dark:bg-black"
              placeholder="Enter an address"
              value={data?.Socials?.Social[0].userAddress}
            ></input>
          </label>
          <label className="block space-x-4 w-fit mx-auto">
            <Button type="submit">Start Conversation</Button>
          </label>
        </form>
      </div>
    </div>
  );
}
