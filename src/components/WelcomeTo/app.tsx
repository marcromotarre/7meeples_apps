/** @jsx jsx */
import { jsx } from 'theme-ui';

import NextEffects from './next-effects.tsx';
import CityPlans from './city-plans.tsx';
import ConstructionCards from './contruction-cards.tsx';
import Actions from './actions.tsx';

import Nav from '../nav';

import { useSelector, useDispatch } from 'react-redux';

import {
  resetDeck,
  nextTurn as nextTurnAction,
  reshuffleDeck as reshuffleDeckAction,
  goPrevious as goPreviousAction,
  goEnd as goEndAction,
  cancelReset as cancelResetAction,
  addEmptyCardToDiscardDeck as addEmptyCardToDiscardDeckAction,
} from '../../actions';
import { cards } from '../../data/deck';
import { cityPlans as cityPlanCards } from '../../data/city-plans';
import { useEffect } from 'react';

const App = () => {
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
    }),
  );

  return (
    <div
      sx={{
        display: 'grid',
        position: 'fixed',
        gridTemplateColumns: ['100%', '30% 70%'],
        gridTemplateRows: ['50px 20% 10% 50px auto', '10% 90%'],
        gridTemplateAreas: [
          `
            'nav'
            'city-plans'
            'next-effects'
            'actions'
            'construction-cards'
          `,
          `
          'city-plans next-effects'
          'city-plans construction-cards'
        `,
        ],
      }}
    >
      <Nav />
      <CityPlans></CityPlans>
      <NextEffects></NextEffects>
      <Actions></Actions>
      <ConstructionCards></ConstructionCards>
    </div>
  );
};

export default App;
