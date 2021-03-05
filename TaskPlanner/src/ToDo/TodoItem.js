import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck, setCancel } from "../features/todoSlice";
import Button from "@material-ui/core/Button";
import "./TodoItem.css";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = (event) => {
    dispatch(setCheck(id));
  };

  const handleClick = (params) => {
    console.log("Clicked");
    dispatch(setCancel(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p
        style={{ width: "80%", textAlign: "left" }}
        className={done && "todoItem--done"}
      >
        {name}
      </p>
      <Button onClick={handleClick} color="default" style={{ float: "right" }}>
        X
      </Button>
    </div>
  );
}

export default TodoItem;
