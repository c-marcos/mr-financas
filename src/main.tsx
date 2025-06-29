import { createRoot } from "react-dom/client";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
