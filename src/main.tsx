import "./polyfills";
import "./index.css";
import "@animxyz/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ClientProvider from "./contexts/ClientContext.tsx";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { findConversation } from "./model/conversations";
import ConversationViewWithLoader from "./views/ConversationViewWithLoader.tsx";
import NewConversationView from "./views/NewConversationView.tsx";
import WalletContext from "./contexts/WalletContext.tsx";
import Header from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import { NextUIProvider } from "@nextui-org/system";

async function conversationLoader({ params }: any) {
  const conversation = await findConversation(params.conversationTopic);
  return { conversation };
}

function NoMatch() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center mt-24 text-4xl">
      <h2>404: Page Not Found</h2>
      <p>Uh oh! Wrong page 😞</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Landing />
        <Footer />
      </>
    ),
  },
  {
    path: "/explore",
    element: (
      <>
        <Header />
        <Explore />
        <Footer />
      </>
    ),
  },

  {
    path: "c/:conversationTopic",
    element: <ConversationViewWithLoader />,
    loader: conversationLoader,
  },
  {
    path: "new",
    element: <NewConversationView />,
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NoMatch />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientProvider>
      <WalletContext>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </WalletContext>
    </ClientProvider>
  </React.StrictMode>
);
