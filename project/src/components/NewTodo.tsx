import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";
const NewTodo:React.FC= () => {
  const todoCtx=useContext(TodoContext)
    const todoTextInputRef=useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoTextInputRef.current?.value
    const enteredText = todoTextInputRef.current!.value
    console.log("🚀 ~ submitHandler ~ enteredText:", enteredText)
    if(enteredText.trim().length ===0){
        return;
    }
    todoCtx.addTodo(enteredText)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text"  ref={todoTextInputRef}/>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
