import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { extendTheme, StyleProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const DefaultTheme = extendTheme({
  styles: {
    global: (props: StyleProps) => ({
      body: {
        bg: mode("#F7FAFC", "#252525")(props),
        overflow: "hidden"
      }
    })
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={DefaultTheme}>
    <App />
  </ChakraProvider>
);
