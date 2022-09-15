import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
