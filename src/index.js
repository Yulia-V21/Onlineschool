// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./App/Routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./../src/Context/ModalContext";
import "./index.css";
import { ScrollProvider } from "./Context/ScrollContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
