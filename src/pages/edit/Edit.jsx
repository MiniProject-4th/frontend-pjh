import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box, TextField, Typography, Button, Radio, RadioGroup, FormControlLabel,
} from "@mui/material";
import {
  StyledContainer, FormLeft, FormRight, CoverBox, ButtonGroup,
  LabelBox, LabelText,
} from "./style";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// MUI 파란색 테마
const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function Edit() {
  const { bookid } = useParams(); 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    categoryId: "1",
    password: "",
  });

  useEffect(() => {
    console.log("Edit 페이지에서 받은 ID:", bookid);

    axios.get(`http://localhost:8080/api/books/${bookid}`)
      .then((res) => {
        const book = res.data;
        setForm({
          title: book.title,
          author: book.author,
          description: book.content,
          categoryId: String(book.categoryId), 
          password: "", // 직접 입력해야 하므로 초기화
        });
      })
      .catch((err) => {
        console.error("책 정보 로딩 실패:", err);
      });
  }, [bookid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("제출된 데이터:", form);

    axios.patch(`http://localhost:8080/api/books/${bookid}`, {
      title: form.title,
      author: form.author,
      content: form.description,
      categoryId: form.categoryId,
      password: form.password,
    })
      .then((res) => {
        alert("도서 정보가 수정되었습니다.");
        navigate("/"); // 수정 완료 후 메인으로 이동
      })
      .catch((err) => {
        console.error("수정 요청 실패:", err);
        alert("수정에 실패했습니다.");
      });
  };

  return (
    <ThemeProvider theme={blueTheme}>
      <StyledContainer>
        {/* 왼쪽 폼 */}
        <FormLeft>
          <Typography variant="h6">| BOOK SETUP</Typography>

          <LabelBox>
            <LabelText><span className="required">*</span>책 제목</LabelText>
            <TextField
              name="title"
              value={form.title}
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </LabelBox>

          <LabelBox>
            <LabelText><span className="required">*</span>저자</LabelText>
            <TextField
              name="author"
              value={form.author}
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </LabelBox>

          <LabelBox>
            <LabelText><span className="required">*</span>책 소개(200자 이내)</LabelText>
            <TextField
              name="description"
              value={form.description}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              onChange={handleChange}
            />
          </LabelBox>

          <LabelBox>
            <LabelText><span className="required">*</span>책 카테고리</LabelText>
            <RadioGroup
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="문학" />
              <FormControlLabel value="2" control={<Radio />} label="경제" />
              <FormControlLabel value="3" control={<Radio />} label="자기 계발" />
              <FormControlLabel value="4" control={<Radio />} label="라이프스타일" />
            </RadioGroup>
          </LabelBox>

          <LabelBox>
            <LabelText><span className="required">*</span>비밀번호(숫자 10자 이내)</LabelText>
            <TextField
              name="password"
              value={form.password}
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
          </LabelBox>

          <ButtonGroup>
            <Button variant="contained">Book Cover Create</Button>
          </ButtonGroup>
        </FormLeft>

        {/* 오른쪽 표지 영역 */}
        <FormRight>
          <Typography variant="h6">| BOOK COVER</Typography>
          <CoverBox>
            <Typography color="text.secondary">표지 미리보기</Typography>
          </CoverBox>
          <Button sx={{ mt: 5, alignSelf: "flex-end" }} variant="contained" onClick={handleSubmit}>
            Edit
          </Button>
        </FormRight>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default Edit;
