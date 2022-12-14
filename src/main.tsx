import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreateMeeting from './page/CreateMeeting';
import MyMeets from './routes/my-meets';
import Meet from './routes/meet';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/create-a-meet",
    element:
      <>
        <Navbar />
        <CreateMeeting />
      </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "my-meets",
    element:
      <>
        <Navbar />
        <MyMeets />
      </>,
  },
  {
    path: "meet",
    element:
      <>
        <Navbar />
        <Meet />
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className='w-full h-fit flex flex-col min-h-full'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
