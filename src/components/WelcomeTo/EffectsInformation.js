import React from "react";
import styled from "styled-components";
import { effectColors } from "../../data/colors";
import UnitInformation from "./UnitInformation";
import { useSelector } from "react-redux";
import { cards } from "../../data/deck.js";

export const EffectsInformationContainer = styled.div`
  grid-area: m-effects-information;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const duplicatedEffects = cards.map((card) => `${card.effect}`);
const effects = duplicatedEffects.filter(
  (cardTypeDuplicated, index) =>
    duplicatedEffects.indexOf(cardTypeDuplicated) === index
);

export default function EffectsInformation({ className }) {
  const deck = useSelector((state) => state.deck);
  const discardDeck = useSelector((state) => state.discardDeck);
  const actualEffects = discardDeck.map((singleDeck) => {
    return { effect: singleDeck[0] ? singleDeck[0].effect : "" };
  });

  const effectsInformation = effects.map((effect) => ({
    id: effect,
    leftCards: [...deck, actualEffects].reduce(
      (count, singleDeck) =>
        count + singleDeck.filter((card) => card.effect === effect).length,
      0
    ),
    showedCards: discardDeck.reduce(
      (count, singleDeck) =>
        count +
        singleDeck.filter((card, index) => card.effect === effect && index > 0)
          .length,
      0
    ),
    color: effectColors[effect],
  }));

  return (
    <EffectsInformationContainer>
      {effectsInformation.map((effectInformation, index) => (
        <UnitInformation
          key={index}
          color={effectInformation.color}
          icon={effectInformation.id}
          showedCards={effectInformation.showedCards}
          leftCards={effectInformation.leftCards}
        />
      ))}
    </EffectsInformationContainer>
  );
}
