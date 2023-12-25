import { Box, TextField, Container, Stack, Grid } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import React, { useState } from "react";
import { Todo } from "./TodoModel";
interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>();
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDelete = (id: Number) => {
    if (!edit) {
      setTodos(todos.filter((todo) => todo.id !== id));
    } else {
      alert("please submit task");
    }
  };

  const handleDone = (id: Number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  const submitEditedTodo = (e: React.FormEvent, id: Number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"orange"}
      borderRadius={"15px"}
      minWidth={"80%"}
    >
      <Box sx={{ ml: "20px" }}>
        {edit ? (
          <form onSubmit={(e) => submitEditedTodo(e, todo.id)}>
            <TextField
              value={editTodo}
              variant="standard"
              autoFocus={true}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          </form>
        ) : !todo.isDone ? (
          <div className="word-wrap">
            <h2>{todo.todo}</h2>
          </div>
        ) : (
          <div className="word-wrap">
            <s>
              <h2>{todo.todo}</h2>
            </s>
          </div>
        )}
      </Box>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"centre"}
        spacing={2}
        mr={"20px"}
        px={"20px"}
      >
        <span>
          <CreateIcon
            className="fa-solid fa-pen scale"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          ></CreateIcon>
          
        </span>
        <span>
          <DeleteIcon
            className="fa-solid fa-trash scale"
            onClick={() => handleDelete(todo.id)}
          ></DeleteIcon>
        </span>
        <span>
          <CheckOutlinedIcon
            className="fa-solid fa-check scale fa-xl"
            onClick={() => handleDone(todo.id)}
          ></CheckOutlinedIcon>
        </span>
      </Stack>
    </Stack>
  );
};

export default SingleTodo;
