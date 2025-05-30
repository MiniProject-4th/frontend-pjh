// src/pages/newbook/style.js
import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem",
});

export const FormLeft = styled("div")({
  width: "48%",
});

export const FormRight = styled("div")({
  width: "48%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CoverBox = styled("div")({
  width: "100%",
  height: "400px",
  backgroundColor: "#e0e0e0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
});

export const ButtonGroup = styled("div")({
  marginTop: "1.5rem",
});
