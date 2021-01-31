import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/WelcomeTo/app";
import store from "../../src/app/store";
import { Provider } from "react-redux";

import { cards } from "../../src/data/welcome-to/your-perfect-home/deck";
import { doors } from "../../src/data/welcome-to/your-perfect-home/doors";
import { effects } from "../../src/data/welcome-to/your-perfect-home/effects";
import { cityPlans as cityPlanCards } from "../../src/data/welcome-to/your-perfect-home/city-plans";

export default () => {
  return (
    <Provider store={store}>
      <App
        cards={cards}
        cityPlanCards={cityPlanCards}
        doors={doors}
        effects={effects}
      />
    </Provider>
  );
};