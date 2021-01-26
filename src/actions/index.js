export const resetDeck = ({ cards }) => ({
  type: 'RESET_DECK',
  payload: {
    cards,
  },
});

export const reshuffleDeck = ({ cards }) => ({
  type: 'RESHUFFLE_DECK',
  payload: {
    cards,
  },
});

export const setCityPlans = ({ cityPlans }) => ({
  type: 'SET_CITY_PLANS',
  payload: {
    cityPlans,
  },
});

export const changeCityPlanState = ({ level }) => ({
  type: 'CHANGE_CITY_PLAN_STATE',
  payload: {
    level,
  },
});

export const executeCityPlanForFirstTime = () => ({
  type: 'EXECUTE_CITY_PLANS_FOR_FIRST_TIME',
});

export const cancelReset = () => ({
  type: 'CANCEL_RESET',
});

export const nextTurn = () => ({
  type: 'NEXT_TURN',
});

export const goPrevious = () => ({
  type: 'GO_PREVIOUS',
});

export const goEnd = () => ({
  type: 'GO_END',
});

export const addEmptyCardToDiscardDeck = ({ numbers }) => ({
  type: 'ADD_EMPTY_CARD_TO_DISCARD_DECK',
  payload: {
    numbers,
  },
});
