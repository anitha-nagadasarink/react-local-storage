// Om Ganapathi Siddhi Buddhi
// Om Shakthi Amma Shivappa
// Vishnu Lakshmu
// Brahama Saraswathi 
// Dakshinamurthy Haygriva
// Sri Venkateshwara Sri Vidya Viajya Gnana Dhyrya Aurogya Samayaspooorthi Lakshmi
import React, { useState, useEffect } from "react";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Container fluid>
      <h1>Jai Sri Seetha Ram</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
