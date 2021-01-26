/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';

import { effects } from '../../data/effects';
import { useSelector } from 'react-redux';
import { couldStartTrivia } from 'typescript';
import { useEffect, useState } from 'react';

const NextEffects = () => {
  const deck = useSelector((state) => state.deck);
  const [nextEffects, setNextEffects] = useState([]);
  const previousMovementsDone = useSelector(
    (state) => state.previousMovementsDone,
  );
  useEffect(() => {
    const nextEffects = deck.map((deckPile) =>
      deckPile[0] ? deckPile[0].effect : undefined,
    );
    setNextEffects(nextEffects);
  }, [deck]);

  const nextEffect0 = effects.find(
    (symbol) => symbol.name === nextEffects[0],
  );

  const nextEffect1 = effects.find(
    (symbol) => symbol.name === nextEffects[1],
  );

  const nextEffect2 = effects.find(
    (symbol) => symbol.name === nextEffects[2],
  );

  return (
    <div
      className="next-effects"
      sx={{
        opacity: previousMovementsDone ? '0.3' : '1',
        gridArea: 'next-effects',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '33% 33% 33%',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '90%',
          height: '80%',
          border: '1px solid #707070',
          borderRadius: '10px',
        }}
      >
        {nextEffect0 && (
          <img
            sx={{
              height: '50%',
              justifySelf: 'center',
              alignSelf: 'center',
            }}
            src={nextEffect0.image}
            alt={nextEffect0.name}
          />
        )}
        {nextEffect1 && (
          <img
            sx={{
              height: '50%',
              justifySelf: 'center',
              alignSelf: 'center',
            }}
            src={nextEffect1.image}
            alt={nextEffect1.name}
          />
        )}
        {nextEffect2 && (
          <img
            sx={{
              height: '50%',
              justifySelf: 'center',
              alignSelf: 'center',
            }}
            src={nextEffect2.image}
            alt={nextEffect2.name}
          />
        )}
      </div>
    </div>
  );
};

export default NextEffects;
