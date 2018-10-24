import React from "react";
import { render } from "react-dom";
import tasksReducer from "./reducers/tasks";
import TodoApp from "./components/TodoApp";
import { createStore } from "redux";

const store = createStore(tasksReducer);

function renderApp(store) {
  render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
