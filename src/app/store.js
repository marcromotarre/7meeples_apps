import { createStore } from "redux";
import deckSlice from "../reducers/deck";

const store = createStore(deckSlice);

//store.subscribe(() => console.log(store.getState()));

export default store;
