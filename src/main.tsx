import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { store } from "./store/index.ts";

import App from "./App.tsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-[#1E1E1E] min-h-screen">
          <Menu>
            <App />
          </Menu>
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
