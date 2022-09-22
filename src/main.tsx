import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import App from "./App";

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
