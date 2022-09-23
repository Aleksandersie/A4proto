import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./Store/UserStore";
import OrderStore from "./Store/OrderStore";
import PriceStore from "./Store/PriceStore";
import MaterialStore from "./Store/MaterialStore";
import CheckBoxStore from "./Store/CheckBoxStore";

export const Context = createContext(null);

export const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      order: new OrderStore(),
      price: new PriceStore(),
      materialList: new MaterialStore(),
      checkStore: new CheckBoxStore()
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
