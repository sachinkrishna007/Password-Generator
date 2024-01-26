import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";

import "primeicons/primeicons.css";
        
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </React.StrictMode>
  </BrowserRouter>
);
