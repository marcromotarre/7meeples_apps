import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/WelcomeTo/app";

import { cards } from "../../src/data/welcome-to/new-las-vegas/deck";
import { casinos } from "../../src/data/welcome-to/new-las-vegas/casinos";
import { effects } from "../../src/data/welcome-to/new-las-vegas/effects";
import { cityPlans as cityPlanCards } from "../../src/data/welcome-to/new-las-vegas/city-plans";

export default () => {
  return (
    <App
      cards={cards}
      cityPlanCards={cityPlanCards}
      doors={casinos}
      effects={effects}
      hasLeftCardsData={false}
    />
  );
};
