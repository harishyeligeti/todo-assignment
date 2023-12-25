import { Box, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <form onSubmit={(e)=>{handleSubmit(e)
    }}>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <TextField
          sx={{ width:{sm:'80vw',md:'80vw',lg:'400px'}}}
          variant="outlined"
          label="Enter your task"
          helperText=''
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <Button variant="contained" type="submit">
          add
        </Button>
      </Box>
    </form>
  );
};

export default InputField;