/** @jsx jsx */
import { jsx, Grid, Flex } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';
import { cards } from '../../data/deck';

import { effects } from '../../data/effects';
import { doors } from '../../data/doors';
import goPrevious from '../../assets/svg/welcometo/go-previous.svg';
import clickHere from '../../assets/svg/welcometo/click-here-to-flip.svg';
import clickHereToShuffle from '../../assets/svg/welcometo/click-here-to-shuffle.svg';
import goNext from '../../assets/svg/welcometo/go-next.svg';

import door1 from '../../assets/svg/welcometo/doors/door-1.svg';
import door13 from '../../assets/svg/welcometo/doors/door-13.svg';
import door8 from '../../assets/svg/welcometo/doors/door-8.svg';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextTurn as nextTurnAction,
  reshuffleDeck as reshuffleDeckAction,
  goPrevious as goPreviousAction,
  goEnd as goEndAction,
  cancelReset as cancelResetAction,
  addEmptyCardToDiscardDeck as addEmptyCardToDiscardDeckAction,
} from '../../actions';
import { useEffect, useState } from 'react';

const ConstructionCards = () => {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.deck);
  const [actualDoorCards, setActualDoorCards] = useState([]);
  const [actualEffectCards, setActualEffectCards] = useState([]);

  useEffect(() => {
    const actualDoorCards = deck.map((subDeck) =>
      subDeck[0] ? subDeck[0].number : undefined,
    );
    setActualDoorCards(actualDoorCards);
    const actualEffectCards = discardDeck.map((subDeck) =>
      subDeck[0] ? subDeck[0].effect : undefined,
    );
    setActualEffectCards(actualEffectCards);
  }, [deck]);
  const canGoNext = deck[0].length > 0;
  const discardDeck = useSelector((state) => state.discardDeck);
  const previousMovementsDone = useSelector(
    (state) => state.previousMovementsDone,
  );

  const effect0 = effects.find(
    (effect) => effect.name === actualEffectCards[0],
  );

  const effect1 = effects.find(
    (effect) => effect.name === actualEffectCards[1],
  );

  const effect2 = effects.find(
    (effect) => effect.name === actualEffectCards[2],
  );

  const handleNextTurn = () => {
    if (previousMovementsDone) return;
    if (canGoNext) {
      dispatch(nextTurnAction());
    } else {
      const lastThreeCards = discardDeck.map(
        (singleDeck) => singleDeck[0],
      );
      const cardWithoutLastThreeCards = cards.filter((card) => {
        return !lastThreeCards.includes(card);
      });
      const shuffledCards = cardWithoutLastThreeCards
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
      dispatch(
        reshuffleDeckAction({
          cards: [
            shuffledCards.slice(0, 26),
            shuffledCards.slice(26, 26 * 2),
            shuffledCards.slice(26 * 2, 26 * 3),
          ],
        }),
      );
    }
  };

  return (
    <div
      className="construction-cards"
      sx={{
        opacity: previousMovementsDone ? '0.3' : '1',
        gridArea: 'construction-cards',
        display: 'grid',
        gridTemplateColumns: ['10% 39% 2% 39% 10%','20% 29% 2% 29% 20%'],
        gridTemplateAreas: `'. doors . effects .'`,
      }}
      onClick={handleNextTurn}
    >
      <div
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '33% 33% 33%',
          gridTemplateAreas: actualDoorCards[0]
            ? `
          "door1" 
          "door2" 
          "door3"`
            : `
          "click-shuffle" 
          "click-shuffle" 
          "click-shuffle"`,
          gridArea: 'doors',
        }}
      >
        {!actualDoorCards[0] && (
          <img
            sx={{
              height: '100%',
              width: '100%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'click-shuffle',
            }}
            src={clickHereToShuffle}
          />
        )}
        {actualDoorCards[0] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door1',
            }}
            src={doors[parseInt(actualDoorCards[0]) - 1]}
            alt={actualDoorCards[1]}
          />
        )}
        {actualDoorCards[1] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door2',
            }}
            src={doors[parseInt(actualDoorCards[1]) - 1]}
            alt={actualDoorCards[1]}
          />
        )}
        {actualDoorCards[2] && (
          <img
            sx={{
              maxHeight: '50%',
              maxWidth: '80%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'door3',
            }}
            src={doors[parseInt(actualDoorCards[2]) - 1]}
            alt={actualDoorCards[2]}
          />
        )}
      </div>
      <div
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '33% 33% 33%',
          gridTemplateAreas: actualEffectCards[0]
            ? `
            "effect1"
            "effect2"
            "effect3"`
            : `
            "click-next"
            "click-next"
            "click-next"`,
          gridArea: 'effects',
        }}
      >
        {!actualEffectCards[0] && (
          <img
            sx={{
              height: '100%',
              width: '100%',
              justifySelf: 'center',
              alignSelf: 'center',
              gridArea: 'click-next',
            }}
            src={clickHere}
          />
        )}
        {actualEffectCards[0] && (
          <div
            sx={{
              display: 'grid',
              width: ['80%','60%'],
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect0.color}`,
              paddingBottom: ['80%','60%'],
              position: 'relative',
              gridArea: 'effect1',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect0.image}
              alt={effect0.name}
            />
          </div>
        )}
        {actualEffectCards[1] && (
          <div
            sx={{
              display: 'grid',
              width: ['80%','60%'],
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect1.color}`,
              paddingBottom: ['80%','60%'],
              position: 'relative',
              gridArea: 'effect2',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect1.image}
              alt={effect1.name}
            />
          </div>
        )}
        {actualEffectCards[2] && (
          <div
            sx={{
              display: 'grid',
              width: ['80%','60%'],
              justifySelf: 'center',
              borderRadius: '10px',
              alignSelf: 'center',
              border: `1px solid ${effect2.color}`,
              paddingBottom: ['80%','60%'],
              position: 'relative',
              gridArea: 'effect3',
            }}
          >
            <img
              sx={{
                position: 'absolute',
                justifySelf: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                width: '80%',
              }}
              src={effect2.image}
              alt={effect2.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConstructionCards;
