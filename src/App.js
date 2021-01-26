import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDeck, setCityPlans } from './actions';
import { cards } from './data/deck.js';
import { cityPlans as cityPlanCards } from './data/city-plans.js';
import Board from './components/WelcomeTo/Board';
import NumbersInformation from './components/WelcomeTo/NumbersInformation';
import EffectsInformation from './components/WelcomeTo/EffectsInformation';
import CityPlans from './components/WelcomeTo/CityPlans';
import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 150px auto 150px;
  grid-template-rows: 75px auto 75px;
  grid-template-areas:
    'm-city-plans . m-numbers-information'
    'm-city-plans m-board m-numbers-information'
    'm-city-plans m-effects-information m-numbers-information';
`;

const App = ({ className }) => {
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

  return (
    <AppContainer className={`App ${className}`}>
      <CityPlans />
      <Board />
      <NumbersInformation />
      <EffectsInformation />
    </AppContainer>
  );
};

export const ss = styled.p``;

export default App;
