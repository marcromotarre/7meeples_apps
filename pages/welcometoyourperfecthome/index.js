import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/WelcomeTo/app";

import { cards } from "../../src/data/welcome-to/your-perfect-home/deck";
import { doors } from "../../src/data/welcome-to/your-perfect-home/doors";
import { effects } from "../../src/data/welcome-to/your-perfect-home/effects";
import { cityPlans as cityPlanCards } from "../../src/data/welcome-to/your-perfect-home/city-plans";
import { useDispatch, useSelector } from "react-redux";
import { clean } from "src/actions";

export default () => {
  const dispatch = useDispatch();
  dispatch(clean());

  return (
    <App
      cards={cards}
      cityPlanCards={cityPlanCards}
      doors={doors}
      effects={effects}
      hasLeftCardsData={true}
    />
  );
};
