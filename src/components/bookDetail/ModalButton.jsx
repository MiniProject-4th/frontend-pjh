import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const ModalButton = ({ type, book }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const passwordRef = useRef();
  const id = book?.id;
  const navigate = useNavigate();

  const handleCheck = () => {
    const password = passwordRef.current.value;

    if (type === "edit") {
      //  비밀번호 검증 API 요청
      axios
        .post(`http://localhost:8080/api/books/${id}/verify-password`, {
          password: password,
        })
        .then(() => {
          // 비밀번호 맞으면 수정 페이지로 이동
          setModalOpen(false);
          navigate(`/books/edit/${id}`);
        })
        .catch(() => {
          // 비밀번호 틀리면 스낵바 띄움
          setSnackbarOpen(true);
        });
    } else {
      // 삭제 요청
      axios
        .delete(`http://localhost:8080/api/books/${id}`, {
          data: { password },
        })
        .then(() => {
          setModalOpen(false);
          navigate("/");
        })
        .catch((error) => {
          setSnackbarOpen(true);
        });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          padding: "6px 12px",
          cursor: "pointer",
          color: type === "edit" ? "gray" : "red",
          "&:focus": {
            outline: "none",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={() => setModalOpen(true)}
      >
        {type === "edit" ? "✏️ 수정하기" : "🗑️ 삭제하기"}
      </Button>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            비밀번호를 입력해주세요
          </Typography>
          <br />
          <TextField
            id="password_input"
            label="Password"
            variant="outlined"
            inputRef={passwordRef}
            type="password"
            fullWidth
          />
          <br />
          <Button
            variant="contained"
            disableElevation
            style={{ float: "right", background: "black", marginTop: "10px" }}
            onClick={handleCheck}
          >
            확인
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={handleClose}
        message="비밀번호가 틀립니다."
      />
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
