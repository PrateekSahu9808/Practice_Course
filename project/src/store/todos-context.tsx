import React, { useState } from "react";
import TodoClass from "../models/todo";
type TodoContextObj = {
  items: TodoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);
  const addTodoHandler = (todoText: string) => {
    console.log(typeof todoText);
    const newTodo = new TodoClass(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandle = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValues: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandle,
  };
  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
