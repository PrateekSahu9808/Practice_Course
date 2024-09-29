import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { TodoContext } from "../store/todos-context";
const Todo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <div>
      <ul className={classes.todos}>
        {todoCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
