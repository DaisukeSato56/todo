import React from "react";
import { inputTask, addTask } from "../actions/tasks";

export default function Todoapp({ store }) {
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
