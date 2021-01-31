import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/WelcomeTo/app";
import store from "../../src/app/store";
import { Provider } from "react-redux";

import { cards } from "../../src/data/welcome-to/new-las-vegas/deck";
import { casinos } from "../../src/data/welcome-to/new-las-vegas/casinos";
import { effects } from "../../src/data/welcome-to/new-las-vegas/effects";
import { cityPlans as cityPlanCards } from "../../src/data/welcome-to/your-perfect-home/city-plans";

export default () => {
  return (
    <Provider store={store}>
      <App
        cards={cards}
        cityPlanCards={cityPlanCards}
        doors={casinos}
        effects={effects}
      />
    </Provider>
  );
};
