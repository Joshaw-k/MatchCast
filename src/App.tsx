import LoginView from "./views/LoginView";
import { useClient, useSetClient } from "./hooks/useClient";
import HomeView from "./views/HomeView";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { useDisconnect } from "wagmi";
import { shortAddress } from "./util/shortAddress";

TimeAgo.addDefaultLocale(en);

function App() {
  const client = useClient()!;
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(client.address);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const { disconnectAsync } = useDisconnect();
  const setClient = useSetClient();
  async function logout() {
    await disconnectAsync();
    indexedDB.deleteDatabase("DB");
    localStorage.removeItem("_insecurePrivateKey");
    setClient(null);
  }

  // return client ? <HomeView /> : <LoginView />;
  return <>
    <BrowserRouter>
      <Header>
        <div className="flex justify-between">
          <div>
            Hi {shortAddress(client.address)}{" "}
            <button className="text-xs text-zinc-600" onClick={copy}>
              {copied ? "Copied Address!" : "Copy Address"}
            </button>
          </div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </Header>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter></>
}

export default App;
