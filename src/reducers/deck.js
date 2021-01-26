/*import { createSlice } from '@reduxjs/toolkit';

const deckSlice = createSlice({
    name: "deck",
    initialState: {
        cards: [],
        numberCards: 0
    },
    reducers: {
      addCard(state, action) {
        return [...state, {numberCards: state.numberCards + 1}];
      }
    }
  });
  
  
  export default deckSlice;
  */

function deckReducer(
  state = {
    deck: [],
    discardDeck: [],
    previousMovementsDone: 0,
    cityPlans: [],
    askReset: false,
  },
  { type, payload },
) {
  switch (type) {
    case 'SET_CITY_PLANS':
      return {
        ...state,
        cityPlans: payload.cityPlans.map((cityPlan) => ({
          ...cityPlan,
          active: true,
        })),
      };

    case 'CHANGE_CITY_PLAN_STATE':
      const cityPlan = state.cityPlans.find(
        (cp) => cp.level === payload.level,
      );
      return {
        ...state,
        cityPlans: [
          ...state.cityPlans.filter(
            (cp) => cp.level !== payload.level,
          ),
          {
            ...cityPlan,
            active: !cityPlan.active,
          },
        ],
      };

    case 'EXECUTE_CITY_PLANS_FOR_FIRST_TIME':
      return {
        ...state,
        askReset: true,
      };

    case 'CANCEL_RESET':
      return {
        ...state,
        askReset: false,
      };

    case 'RESET_DECK':
      return {
        ...state,
        deck: payload.cards,
        discardDeck: payload.cards.map(() => []),
      };

    case 'RESHUFFLE_DECK':
      return {
        ...state,
        deck: payload.cards,
      };

    case 'ADD_EMPTY_CARD_TO_DISCARD_DECK':
      return {
        ...state,
        discardDeck: state.discardDeck.map((subDeck, index) => [
          {
            number: payload.numbers[index],
            effect: '',
          },
          ...state.discardDeck[index],
        ]),
      };

    case 'GO_PREVIOUS':
      return {
        ...state,
        previousMovementsDone: state.previousMovementsDone + 1,
        deck: state.discardDeck.map((subDeck, index) => [
          subDeck[0],
          ...state.deck[index],
        ]),
        discardDeck: state.discardDeck.map((subDeck) =>
          subDeck.filter((cards, index) => index > 0),
        ),
      };

    case 'NEXT_TURN':
      return {
        ...state,
        discardDeck: state.deck.map((subDeck, index) => [
          subDeck[0],
          ...state.discardDeck[index],
        ]),
        deck: state.deck.map((subDeck) =>
          subDeck.filter((cards, index) => index > 0),
        ),
        previousMovementsDone:
          state.previousMovementsDone > 0
            ? state.previousMovementsDone - 1
            : 0,
      };

    case 'GO_END':
      return {
        ...state,
        discardDeck: state.deck.map((subDeck, index) => [
          ...subDeck.slice(0, state.previousMovementsDone).reverse(),
          ...state.discardDeck[index],
        ]),
        deck: state.deck.map((subDeck) =>
          subDeck.filter(
            (cards, index) => index > state.previousMovementsDone - 1,
          ),
        ),
        previousMovementsDone: 0,
      };

    default:
      return {
        ...state,
      };
  }
}

export default deckReducer;
