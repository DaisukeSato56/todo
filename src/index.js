import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

const initialState = {
  task: "",
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task
      };
    default:
      return state;
  }
};

const addTask = task => ({
  type: "ADD_TASK",
  payload: { task }
});

const inputTask = task => ({
  type: "INPUT_TASK",
  payload: {
    task
  }
});

const store = createStore(tasksReducer);

function handleChange() {
  console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange);

console.log(store.getState());

store.dispatch(addTask("Storeを学ぶ"));

function Todoapp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input
        type="text"
        onChange={e => store.dispatch(inputTask(e.target.value))}
      />
      <input type="button" onClick={() => store.dispatch(addTask(task))} />
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(<Todoapp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
