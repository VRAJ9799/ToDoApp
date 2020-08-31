import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const TaskList = (props) => {
  return (
    <>
      <div >
        <li>
          {props.todo}
          <Button id="delbtn" onClick={() => props.onSelect(props.id)}>
            <DeleteIcon />
          </Button>
        </li>
      </div>
    </>
  );
};

export default TaskList;
