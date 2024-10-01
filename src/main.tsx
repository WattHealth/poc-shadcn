import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";
import NavBar from "./components/Navbar";
import Navigator from "./components/Navigator";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavBar>
          <Navigator />
        </NavBar>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
