import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Dish } from "./pages/Dish"; 
import { Create } from "./pages/Create"; 
import { Edit } from "./pages/Edit"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Home />
    </ThemeProvider>
  </StrictMode>
);
