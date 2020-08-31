import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

import TaskList from "./TaskList";
const Task = () => {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState("");

  const addTask = () => {
    settodos([...todos, task]);
    settask("");
  };

  const removeTask = (props) => {
    settodos((todos) => {
      return todos.filter((todo, id) => {
        return props !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <p>To Do App</p>
        <div className="taskinput">
          <input
            type="text"
            name="task"
            placeholder="Add Task"
            value={task}
            onChange={(event) => settask(event.target.value)}
          />
          <Button onClick={addTask} disabled={!task} id="addbtn">
            <AddIcon fontSize="large" />
          </Button>
        </div>
        <div className="tasklist">
          <ul>
            {todos.map((todo, index) => {
              return (
                <>
                  <TaskList
                    todo={todo}
                    id={index}
                    key={index}
                    onSelect={removeTask}
                  />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Task;
