import { useState } from "react";
import { useStore } from "./store";


export const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useStore(state => state.addTodo);


  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </button> 
    </form>
  );
}
