import React from 'react';
import Navbar from './components/Navbar';
import CreateMeeting from './page/CreateMeeting';

// Todo:
// 1. Calendar Component
// https://hypeserver.github.io/react-date-range/
// 2. Read TypeScript React docs

function App() {
  return (
    <>
      <div className='w-full h-fit xl:h-full flex flex-col'>
        <Navbar />
        <CreateMeeting />
      </div>
      <div className='w-full h-fit bg-gray-600 text-gray-50 flex justify-center
            border-t-2 border-gray-700'>
        <div className='text-center px-10 my-6 max-w-4xl'>
          <p>      Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility
            issues with Rutgers websites to accessibility@rutgers.edu or
            complete the Report Accessibility Barrier / Provide Feedback form.
          </p>
          <br />
          <p>Copyright © 2022, Rutgers, The State University of New Jersey, an
            equal opportunity, affirmative action institution. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
