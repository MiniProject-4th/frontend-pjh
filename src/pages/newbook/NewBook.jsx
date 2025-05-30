// src/pages/newbook/NewBook.jsx
import React, { useState } from "react";
import { Box, TextField, Typography, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { StyledContainer, FormLeft, FormRight, CoverBox, ButtonGroup, LabelBox ,LabelText,CustomBlackButton} from "./style";

function NewBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "라이프스타일",
    password: "",
    apiKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("제출된 데이터:", form);
    // 추후 axios.post로 전송 예정
  };

  return (
    <StyledContainer>
      {/* 왼쪽 폼 */}
      <FormLeft>
        <Typography variant="h6">| BOOK SETUP</Typography>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>책 제목
          </LabelText>
          <TextField name="title" fullWidth margin="normal" onChange={handleChange} />
        </LabelBox>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>저자
          </LabelText>
          <TextField name="author" fullWidth margin="normal" onChange={handleChange} />
        </LabelBox>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>책 소개(200자 이내)
          </LabelText>
          <TextField name="description" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
        </LabelBox>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>책 카테고리
          </LabelText>
          <RadioGroup name="category" value={form.category} onChange={handleChange}>
            <FormControlLabel value="문학" control={<Radio />} label="문학" />
            <FormControlLabel value="경제" control={<Radio />} label="경제" />
            <FormControlLabel value="자기계발" control={<Radio />} label="자기계발" />
            <FormControlLabel value="라이프스타일" control={<Radio />} label="라이프스타일" />
          </RadioGroup>
        </LabelBox>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>비밀번호(숫자 10자 이내)
          </LabelText>
          <TextField name="password" fullWidth margin="normal" onChange={handleChange} />
        </LabelBox>

        <LabelBox>
          <LabelText>
            <span className="required">*</span>API KEY
          </LabelText>
          <TextField name="apiKey" fullWidth margin="normal" onChange={handleChange} />
        </LabelBox>

        <ButtonGroup>
          <CustomBlackButton variant="contained">Book Cover Create</CustomBlackButton>
        </ButtonGroup>
      </FormLeft>




      {/* 오른쪽 책 커버 */}
      <FormRight>
        <Typography variant="h6">| BOOK COVER</Typography>
        <CoverBox>
          <Typography color="text.secondary">표지 미리보기</Typography>
        </CoverBox>
        <Button sx={{ mt: 5 }} variant="contained" onClick={handleSubmit}>
          Add Book
        </Button>
      </FormRight>
    </StyledContainer>
  );
}

export default NewBook;
