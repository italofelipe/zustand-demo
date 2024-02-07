import { useStore } from "./store";


export const TodoSection = () => {
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const { age, name } = useStore((s) => s.owner);
  const todos = useStore((state) => state.todos);

  return (
    <div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'green' : 'black' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <p>{todo.text}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};