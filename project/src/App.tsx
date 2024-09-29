import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import TodoClass from "./models/todo";
import TodoContextProvider from "./store/todos-context";
function App() {
  // const todos = [
  //   new TodoClass("learn React"),
  //   new TodoClass("learn typescript"),
  //   new TodoClass("learn Vite"),
  //   new TodoClass("learn React Native"),
  //   new TodoClass("learn GraphQL"),
  // ];

 
  return (
    <TodoContextProvider>
    <NewTodo />
      <Todo/>
    </TodoContextProvider>
  );
}

export default App;
