import { ReactElement } from "react";
import ConversationListView from "./ConversationListView";
import { Link } from "react-router-dom";
export default function HomeView(): ReactElement {

  return (
    <div className="">
      <small className="flex justify-between">
        <span>Here are your conversations:</span>
        <Link to="new" className="text-blue-700">
          Make a new one
        </Link>
      </small>
      <ConversationListView />
    </div>
  );
}
