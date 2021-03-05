import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
import Input from "./ToDo/Input";
import TodoItem from "./ToDo/TodoItem";
import "./App.css";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/4311/4311745.svg?token=exp=1614934022~hmac=65243442f78ae9f27f6da7522b80b25f"
            alt=""
            style={{ width: "50px", margin: "20px" }}
          />
        </div>

        <div className="app__container">
          <div className="app__todo">
            <Input />

            {todoList.map((item) => (
              <>
                <TodoItem name={item.item} done={item.done} id={item.id} />
              </>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
