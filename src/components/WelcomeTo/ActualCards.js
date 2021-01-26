import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import Number from './Number';
import Effect from './Effect';

export const ActualCardsContainer = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: m-actual-cards;
  display: grid;
  grid-template-columns: 152px 152px 152px;
  grid-template-rows: 152px 152px;
  column-gap: 34px;
  row-gap: 34px;
`;

export default function ActualCards({ className }) {
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);

  const actualDoorCards = deck.map((subDeck) =>
    subDeck[0] ? subDeck[0].number : undefined,
  );
  const actualEffectCards = discardDeck.map((subDeck) =>
    subDeck[0] ? subDeck[0].effect : undefined,
  );

  return (
    <ActualCardsContainer className={className}>
      {actualDoorCards.map((actualDoorCard, index) => (
        <Number key={index} number={actualDoorCard} />
      ))}
      {actualEffectCards.map((actualEffectCard, index) => (
        <Effect
          key={index}
          effect={actualEffectCard}
          color="#FF0000"
        />
      ))}
    </ActualCardsContainer>
  );
}
