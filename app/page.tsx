"use client";
import Image from "next/image";
import styles from "./page.module.css";

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/TodoModel";
import TodoList from "./components/TodoList";
import Homepage from "./components/Homepage";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <>
      <Homepage />
      <div className="App">
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
