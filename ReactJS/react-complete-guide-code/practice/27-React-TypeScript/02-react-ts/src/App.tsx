import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
/* 
function App() {
  return (
    <div>
      <Todos />
    </div>
  );
}
 */

// ************************************************ Working with Props & TypeScript

/* 
function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn TypeScript"]} />
    </div>
  );
}
 */

// ***************************************************** Adding a data model
/* 
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Learn JavaScript"),
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
} */

// ***************************************************** Managing State & TypeScript
/* 
import { useState } from "react";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // setTodos((prev) => [new Todo(todoText), ...prev]);
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}
export default App;
 */

// ***************************************************** The Context API & TypeScript

import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}
export default App;
