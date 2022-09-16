import React from 'react';
import Navbar from "./components/Navbar";
import CreateMeeting from './page/CreateMeeting';

// Todo:
// 1. Calendar Component
// https://hypeserver.github.io/react-date-range/
// 2. Read TypeScript React docs

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <CreateMeeting />
    </div>
  );
}

export default App;
