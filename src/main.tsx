import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "../amplify_outputs.json";
// import { Authenticator } from "@aws-amplify/ui-react";
import App from "./App.tsx";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import type { Schema } from ".././amplify/data/resource";

Amplify.configure(outputs);

const client = generateClient<Schema>();
console.log(client.queries);

client.queries.sayHello({
  name: "Amplify",
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
