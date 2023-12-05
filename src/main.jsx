import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/fontawesome/css/all.min.css";
import "./dist/css/main.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./components/AuthContext.jsx";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
