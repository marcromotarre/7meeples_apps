import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextTurn as nextTurnAction,
  reshuffleDeck as reshuffleDeckAction,
  goPrevious as goPreviousAction,
  goEnd as goEndAction,
  cancelReset as cancelResetAction,
  addEmptyCardToDiscardDeck as addEmptyCardToDiscardDeckAction,
} from '../../actions';

import { cards } from '../../data/deck.js';
import SVGIcon from './SVGIcon';

export const ActionsContainer = styled.div`
  grid-area: m-actions;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-columns: 152px 152px 152px;
  grid-template-rows: 152px;
  column-gap: 34px;

  button,
  button:focus,
  button:active {
    border: 0px solid transparent;
    background: none;
    outline: none;
  }
  button span {
    position: relative;
    display: flex;
    justify-self: center;
    align-self: center;
  }
`;

export const SubActionsContainer = styled.div`
  justify-self: center;
  align-self: center;
`;

export default function Actions() {
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  const previousMovementsDone = useSelector(
    (state) => state.previousMovementsDone,
  );
  const askReset = useSelector((state) => state.askReset);

  const nextTurn = () => {
    dispatch(nextTurnAction());
  };

  const goToPrevious = () => dispatch(goPreviousAction());

  const resetDeck = () => {
    dispatch(
      addEmptyCardToDiscardDeckAction({
        numbers: deck.map((singleDeck) => singleDeck[0].number),
      }),
    );
    dispatch(cancelResetAction());
    const shuffledCards = cards
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
    dispatch(
      reshuffleDeckAction({
        cards: [
          shuffledCards.slice(0, 27),
          shuffledCards.slice(27, 27 * 2),
          shuffledCards.slice(27 * 2, 27 * 3),
        ],
      }),
    );
  };

  const notResetDeck = () => {
    dispatch(cancelResetAction());
  };

  const shuffle = () => {
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
  };
  const goToEnd = () => {
    dispatch(goEndAction());
  };

  const canGoPrevious = discardDeck[0].length > 0 && !askReset;
  const canGoNext = deck[0].length > 0 && !askReset;
  const canGoEnd = previousMovementsDone > 0 && !askReset;
  const canShuffleDeck = deck[0].length === 0 && !askReset;
  const canResetDeck = askReset;
  const canDiscardResetAction = askReset;

  return (
    <ActionsContainer>
      <SubActionsContainer>
        {canGoPrevious && (
          <button onClick={goToPrevious}>
            <SVGIcon name="previous" height={52} width={52} />{' '}
          </button>
        )}
      </SubActionsContainer>
      <SubActionsContainer>
        {canShuffleDeck && (
          <button onClick={shuffle}>
            <SVGIcon name="refresh" height={52} width={52} />{' '}
          </button>
        )}
        {canResetDeck && (
          <button onClick={resetDeck}>
            <SVGIcon name="refresh" height={52} width={52} />{' '}
          </button>
        )}
        {canDiscardResetAction && (
          <button onClick={notResetDeck}>
            <SVGIcon name="not_refresh" height={52} width={52} />{' '}
          </button>
        )}
      </SubActionsContainer>
      <SubActionsContainer>
        {canGoNext && (
          <button onClick={nextTurn}>
            <SVGIcon name="next" height={52} width={52} />
          </button>
        )}
        {canGoEnd && (
          <button onClick={goToEnd}>
            <SVGIcon name="end" height={52} width={52} />{' '}
          </button>
        )}
      </SubActionsContainer>
    </ActionsContainer>
  );
}
