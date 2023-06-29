import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#EBF9F9",
      100: "#C7EEEF",
      200: "#A3E3E5",
      300: "#7FD7DB",
      400: "#5CCCD1",
      500: "#38C1C7",
      600: "#2C9AA0",
      700: "#217478",
      800: "#164D50",
      900: "#0B2728",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
