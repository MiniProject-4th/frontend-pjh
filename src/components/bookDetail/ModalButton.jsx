import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";

export const ModalButton = ({ type }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCheck = () => {
    // 비밀번호 체크 결과
    const checkPassword = true;

    // result가 false면 스낵바 보여주기
    if (!checkPassword) {
      setSnackbarOpen(true);
    } else {
      if (type === "edit") {
        console.log("수정 페이지로 넘어가야해요");
      } else {
        console.log("백엔드에 삭제 요청을 보내야해요");
      }
      setModalOpen(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

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
            color="black"
          />
          <br />
          <Button
            variant="contained"
            disableElevation
            style={{ float: "right", background: "black" }}
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
