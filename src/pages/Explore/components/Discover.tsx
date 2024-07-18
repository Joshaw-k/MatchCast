import * as React from "react";

export const Discover = () => {
return (
  <div className="flex justify-center items-center px-20 py-8 bg-indigo-200 max-md:px-5">
    <div className="justify-center w-full max-w-[1289px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-semibold text-black leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[77px]">
              Discover NFT Gems
            </div>
            <div className="mt-4 text- leading-10 text-gray-700 max-md:max-w-full">
              Explore the world of NFTs and connect with unique digital
              assets. Find pieces that resonate with your style and
              preferences, and engage with creators and fellow enthusiasts in
              the NFT community. Start your NFT journey today!
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/19006024691dc5dbf23a9726425ec41587f413cabc92a1d516e00e9dd96ec1f1?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="w-full "
            />
            <div className="flex flex-col justify-end gap-1 px-16 mt-8 max-md:px-5">
              <div className="text-black">Abstract Collection</div>
              <div className="justify-center self-center px-4 py-2 font-medium text-white whitespace-nowrap bg-blue-500 rounded-2xl shadow-sm max-md:px-5">
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}