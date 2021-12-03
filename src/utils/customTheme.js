import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#22359a",
    },
    secondary: {
      main: "#f50057",
    },
    warning: {
      main: "#b3741e",
    },
  },
  typography: {
    fontFamily: "Epilogue",
    fontSize: 16,
  },
});
