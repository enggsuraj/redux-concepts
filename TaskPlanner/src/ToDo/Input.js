import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import Button from "@material-ui/core/Button";
import { Input as InputField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: "10px",
  },
}));

function Input() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleInputChange = (e) => {
    let temp = e.target.value;
    console.log(temp);
    let userText = temp.replace(/^\s+/, "").replace(/\s+$/, "");
    if (userText === "") {
      alert("Enter Task");
    } else {
      setInput(temp);
    }
  };

  const addToDo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <div className="input">
      <InputField
        type="text"
        value={input}
        style={{ width: "80%" }}
        placeholder="Enter Task"
        onChange={handleInputChange}
      />
      <Button
        className={classes.btn}
        onClick={addToDo}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </div>
  );
}

export default Input;
