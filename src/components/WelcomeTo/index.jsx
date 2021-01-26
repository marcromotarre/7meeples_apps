import { jsx } from 'theme-ui';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDeck, setCityPlans } from '../../actions';
import { cards } from '../../data/deck';
import { cityPlans as cityPlanCards } from '../../data/city-plans';

import missionL1 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL2 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';
import missionL3 from '../../assets/svg/welcometo/missions/mission-l1-1.svg';

const App = () => {
  const dispatch = useDispatch();

  const shuffledCards = cards
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  const cityPlans = [
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '1')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '2')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
    cityPlanCards
      .filter((cityPlan) => cityPlan.level === '3')
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1])[0],
  ];

  dispatch(
    resetDeck({
      cards: [
        shuffledCards.slice(0, 27),
        shuffledCards.slice(27, 27 * 2),
        shuffledCards.slice(27 * 2, 27 * 3),
      ],
    }),
  );
  dispatch(setCityPlans({ cityPlans }));

  return <></>;
};

export default App;
