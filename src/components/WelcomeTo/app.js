/** @jsx jsx */
import { jsx } from "theme-ui";

import NextEffects from "./next-effects";
import CityPlans from "./city-plans";
import LeftCards from "./left-cards";
import LeftCardsTablet from "./left-cards";
import ConstructionCards from "./contruction-cards";
import Actions from "./actions";

import Nav from "../nav";

import { useDispatch, useSelector } from "react-redux";

import { resetDeck, setCityPlans as setCityPlansAction } from "../../actions";
import { useEffect } from "react";

const App = ({ cards, cityPlanCards, doors, effects, hasLeftCardsData }) => {
  const dispatch = useDispatch();
  const showLeftCards = useSelector((state) => state.showLeftCards);

  useEffect(() => {
    const cityPlans = [
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 1)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 2)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
      cityPlanCards
        .filter((cityPlan) => cityPlan.level === 3)
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])[0],
    ];
    dispatch(setCityPlansAction({ cityPlans }));

    const shuffledCards = cards
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

    dispatch(
      resetDeck({
        cards: [
          shuffledCards.slice(0, 27),
          shuffledCards.slice(27, 27 * 2),
          shuffledCards.slice(27 * 2, 27 * 3),
        ],
      })
    );
  }, []);

  return (
    <div
      sx={{
        justifyContent: "center",
        height: "fill-content",
        width: "100%",
        display: "grid",
        position: "fixed",
        gridTemplateColumns: [
          "100%",
          "25% 50px calc(70% - 150px) 100px",
          "25% 50px calc(70% - 150px) 100px",
        ],
        gridTemplateRows: [
          "50px 20% 10% 30px calc(70% - 80px)",
          "100px 100px 5% auto",
          "100px 100px 5% auto",
        ],
        gridTemplateAreas: [
          `
            'nav'
            'city-plans'
            'next-effects'
            'actions'
            'construction-cards'
          `,
          `
            'nav nav nav nav'
            'city-plans next-effects next-effects ${
              hasLeftCardsData ? "left-cards-tablet" : "next-effects"
            }'
            'city-plans actions actions ${
              hasLeftCardsData ? "left-cards-tablet" : "actions"
            }'
            'city-plans construction-cards construction-cards ${
              hasLeftCardsData ? "left-cards-tablet" : "construction-cards"
            }'
          `,
        ],
      }}
    >
      <Nav />
      {!showLeftCards && <CityPlans cityPlanCards={cityPlanCards}></CityPlans>}
      {showLeftCards && <LeftCards></LeftCards>}
      <NextEffects effects={effects}></NextEffects>
      <Actions hasLeftCardsData={hasLeftCardsData}></Actions>
      <ConstructionCards
        cards={cards}
        effects={effects}
        doors={doors}
      ></ConstructionCards>
      {hasLeftCardsData && (
        <LeftCardsTablet name={"left-cards-tablet"}></LeftCardsTablet>
      )}
    </div>
  );
};

export default App;
