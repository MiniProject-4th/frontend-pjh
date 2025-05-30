import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function PasswordSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="비밀번호가 틀립니다."
      />
    </div>
  );
}
