import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/components/WelcomeTo/app.tsx";
import store from "../../src/app/store";
import { Provider } from "react-redux";

export default () => {
  return (
    <Provider store={store}>
      <h1>Boom</h1>
    </Provider>
  );
};
