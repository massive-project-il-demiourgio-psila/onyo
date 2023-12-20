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
// import { AuthProvider } from "./components/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
