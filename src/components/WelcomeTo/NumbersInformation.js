import React from "react";
import styled from "styled-components";
import UnitInformation from "./UnitInformation";
import { useSelector } from "react-redux";
import { cards } from "../../data/deck";

export const NumbersInformationContainer = styled.div`
  grid-area: m-numbers-information;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
`;

const duplicatedNumbers = cards.map((card) => `${card.number}`);
const numbers = duplicatedNumbers.filter(
  (cardTypeDuplicated, index) =>
    duplicatedNumbers.indexOf(cardTypeDuplicated) === index
);

export default function NumbersInformation({ className }) {
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  const numbersInformation = numbers.map((number) => ({
    id: number,
    leftCards: deck.reduce(
      (count, singleDeck) =>
        count + singleDeck.filter((card) => card.number === number).length,
      0
    ),
    showedCards: discardDeck.reduce(
      (count, singleDeck) =>
        count + singleDeck.filter((card) => card.number === number).length,
      0
    ),
  }));

  return (
    <NumbersInformationContainer>
      {numbersInformation.map(({ id, showedCards, leftCards }, index) => (
        <UnitInformation
          key={index}
          color="#000"
          type="number"
          icon="door"
          value={id}
          showedCards={showedCards}
          leftCards={leftCards}
        />
      ))}
    </NumbersInformationContainer>
  );
}
