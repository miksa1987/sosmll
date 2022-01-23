import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { connectSupabase } from "./service/supabase";
import { RecoilRoot } from "recoil";

connectSupabase();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ColorModeScript />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
