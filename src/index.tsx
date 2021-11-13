import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalStyle } from "./general/styled-components/global";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </StrictMode>,
  rootElement
);
