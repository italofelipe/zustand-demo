import { create } from "zustand";
import { TodoState } from "./types";



export const useStore = create<TodoState>((set) => ({
  todos: [],
  owner: {
    name: "Emerson",
    age: 42,
  },
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, text, completed: false },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
