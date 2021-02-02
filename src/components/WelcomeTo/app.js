/** @jsx jsx */
import { jsx } from "theme-ui";

import NextEffects from "./next-effects";
import CityPlans from "./city-plans";
import LeftCards from "./left-cards";
import ConstructionCards from "./contruction-cards";
import Actions from "./actions";

import Nav from "../nav";

import { useDispatch } from "react-redux";

import { resetDeck } from "../../actions";

const App = ({ cards, cityPlanCards, doors, effects }) => {
  const dispatch = useDispatch();

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

  return (
    <div
      sx={{
        justifyContent: "center",
        height: "fill-content",
        width: "100%",
        display: "grid",
        position: "fixed",
        gridTemplateColumns: ["100%", "30% 50px auto", "30% 50px auto"],
        gridTemplateRows: [
          "50px 5% 20% 10% auto",
          "100px 5% 100px auto",
          "100px 5% 100px auto",
        ],
        gridTemplateAreas: [
          `
            'nav'
            'actions'
            'city-plans'
            'next-effects'
            'construction-cards'
          `,
          `
          'nav nav nav'
          'actions actions actions'
          'city-plans next-effects next-effects'
          'city-plans construction-cards construction-cards'
          `,
          `
          'nav nav nav'
          'actions actions actions'
          'city-plans next-effects next-effects'
          'city-plans construction-cards construction-cards'
        `,
        ],
      }}
    >
      <Nav />
      {true && <LeftCards cityPlanCards={cityPlanCards}></LeftCards>}
      {false && <CityPlans cityPlanCards={cityPlanCards}></CityPlans>}
      <NextEffects effects={effects}></NextEffects>
      <Actions></Actions>
      <ConstructionCards
        cards={cards}
        effects={effects}
        doors={doors}
      ></ConstructionCards>
    </div>
  );
};

export default App;
