import { TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, Box } from "@mui/material";
import { useState } from "react";

function NewBook() {
  const [title, setTitle] = useState("");

  return (
    <Box p={4}>
      <Typography variant="h5">📚 책 등록</Typography>
      <TextField
        fullWidth
        label="책 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      {/* 아래에 저자, 소개, 카테고리 등 계속 추가 */}
      <Button variant="contained" color="primary">Add Book</Button>
    </Box>
  );
}

export default NewBook;

