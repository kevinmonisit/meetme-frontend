import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import Button from '../components/Button';
import LargeButton from '../components/LargeButton';
import Tile from '../components/Tile';


// eslint-disable-next-line no-unused-vars
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function CreateMeeting() {
  return (
    <div className='w-full h-full bg-gray-100 flex flex-col items-center grow'>
      <div className='w-full font-bold text-3xl text-center mb-6 mt-10'>
        Create a new Meet
      </div>
      <div
        className='flex flex-col lg:flex-row w-full h-fit'
        style={{
          maxWidth: '100rem',
          minWidth: '25rem',
        }}
      >
        <div>
          <Tile title='Name Your Meet'>
            <TextField
              label='standard' variant='standard'
              className='w-full'
            />
          </Tile>
          <Tile title='Location'>
            <TextField
              label='standard' variant='standard'
              className='w-full'
            />
          </Tile>
          <Tile title='Times'>
            Show times between 9am and 5pm
          </Tile>
        </div>
        <div className='lg:grow h-full flex flex-col'>
          <Tile
            title='Choose Your Days'
            subtitle='What days would you like to make available for scheduling?'
            fullHeight
          >
            <div>Choose specific days for accurate availability</div>
            <div className='w-full h-72 bg-gray-400 rounded-lg' />
            <div className='text-gray-500'>
              Or choose weekdays for repeated availability.
            </div>
            <div
              className='w-full grow grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-4
                         grid-rows-4 lg:grid-rows-2 auto-cols-max'
            >
              {DAYS.map((day) => (
                <div key={day} className='mr-4'>
                  <Button text={day} key={day} fullWidth />
                </div>
              ))}
            </div>
          </Tile>
        </div>
        <div
          className='flex flex-col'
          style={{
            minWidth: '25rem',
          }}
        >
          <Tile title='Invite Your Collaborators' grow>
            <div className='w-full h-72 bg-gray-400 rounded-lg' />
            <div className='flex justify-center space-x-4 items-start mt-3'>
              <TextField label='standard' variant='standard' fullWidth />
              <Button text='Invite' red />
            </div>
          </Tile>
          <Tile title='Finish and Create Your Meet'>
            <div className='w-full flex justify-center'>
              <LargeButton text='Beam me up, Scotty!' />
            </div>
          </Tile>
        </div>
      </div>
    </div>
  );
}

export default CreateMeeting;
