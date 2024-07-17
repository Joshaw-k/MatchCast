import "./polyfills";
import "./index.css";
import "@animxyz/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ClientProvider from "./contexts/ClientContext.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { findConversation } from "./model/conversations";
import ConversationViewWithLoader from "./views/ConversationViewWithLoader.tsx";
import NewConversationView from "./views/NewConversationView.tsx";
import WalletContext from "./contexts/WalletContext.tsx";
import Header from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

async function conversationLoader({ params }: any) {
  const conversation = await findConversation(params.conversationTopic);
  return { conversation };
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientProvider>
      <WalletContext>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </WalletContext>
    </ClientProvider>
  </React.StrictMode>
);
