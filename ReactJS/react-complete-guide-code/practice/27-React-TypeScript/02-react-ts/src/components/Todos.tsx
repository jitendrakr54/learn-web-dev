/* 
function Todos(props) {
  return (
    <ul>
      <li>Learn React</li>
      <li>Learn TypeScript</li>
    </ul>
  );
}
 */

// ************************************************ Working with Props & TypeScript

/* 
import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
 */

// ***************************************************** Adding a data model

/* 
import React from "react";

import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
 */

// ***************************************************** Time to Practice: Exercise Time!
/* 
import React from "react";
import classes from "./Todos.module.css";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
 */

// ***************************************************** The Context API & TypeScript

import React, { useContext } from "react";
import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
