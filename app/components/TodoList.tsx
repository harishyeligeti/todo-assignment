import React from "react";
import { Todo } from "./TodoModel";
import { Box, Container, Stack } from "@mui/material";
import SingleTodo from "./SingleTodo";


interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <Box
    sx={{
    py:'16px',
    my:'20px',
    width:{xs:'80%',sm:'80%',lg:'500px'}
  }
  }

    >
      <Stack spacing={2}>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />;
      })}
      </Stack>
    </Box>
  );
};

export default TodoList;
