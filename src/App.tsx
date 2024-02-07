// App.tsx
import { TodoForm } from "./TodoForm";
import { TodoSection } from "./TodoSection";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>
        Estado dos Todos:
        <TodoForm />
      </div>
      <div>
        <TodoSection />
      </div>
    </div>
  );
};

export default App;
