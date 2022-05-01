import App from "./App";
import { GreenYellow } from "./constants/themes";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { store } from "./store/store";

// Global Reset
const GlboalStyles = createGlobalStyle`
html,body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

body * {
  font-family: 'Rubik', sans-serif;
  font-size: 1.6rem;
}
a{
  text-decoration: none;
}
button, input{
  outline: none;
  border: none;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={GreenYellow}>
      <Provider store={store}>
        <>
          <GlboalStyles />
          <App />
        </>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
