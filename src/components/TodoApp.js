import React from "react";

export default function Todoapp(props) {
  console.log(props.tasks);
  return (
    <div>
      <input type="text" onChange={e => props.inputTask(e.target.value)} />
      <input type="button" onClick={() => props.addTask(props.task)} />
      <ul>
        {props.tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
