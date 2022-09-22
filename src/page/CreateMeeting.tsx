import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import TextField from '@mui/material/TextField/TextField';
import { DateRangePicker } from 'react-date-range';
import Tile from '../components/Tile';
import Button from '../components/Button';
import LargeButton from '../components/LargeButton';
import RutgersLogoUrl from '../assets/RU_SHIELD_BLACK.png';
import CollaboratorsContainer from '../components/Callobrators';

// eslint-disable-next-line no-unused-vars
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * TODO:
 *
 * The name your meet, location, times looks too wide
 * when the screen is medium. Break it up to make it look nicer. Add variety.
 *
 */


function CreateMeeting() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className='w-full h-full bg-gray-100 flex flex-col items-center grow'>
      <div className='w-full font-bold text-3xl text-center mb-6 mt-10'>
        Create a new Meet
      </div>
      <div
        className='flex flex-col xl:flex-row w-full h-fit'
        style={{
          maxWidth: '100rem',
          minWidth: '25rem',
        }}
      >
        <div className='flex flex-col sm:flex-row xl:flex-col'>
          <div className='sm:grow xl:grow-0 items-stretch flex flex-col'>
            <Tile title='Name Your Meet' grow verticallyCenter>
              <TextField
                label='standard' variant='standard'
                className='w-full'
              />
            </Tile>
          </div>
          <div className='w-auto sm:w-1/2 xl:w-auto -mt-2 sm:mt-0 xl:-mt-2'>
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
        </div>
        <div className='lg:grow h-full flex flex-col'>
          <Tile
            title='Choose Your Days'
            subtitle='What days would you like to make available for scheduling?'
            fullHeight
          >
            <div>Choose specific days for accurate availability</div>
            <div className='w-full flex justify-center'>
              <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={state}
                direction='vertical'
              />
            </div>
            <div className='text-gray-500'>
              Or choose weekdays for repeated availability.
            </div>
            <div
              className='w-full grow grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
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
          className='flex flex-col sm:flex-row xl:flex-col items-stretch mb-16 xl:mb-0'
          style={{

            minWidth: '25rem'
          }}
        >
          <Tile title='Invite Your Collaborators' grow>
            <CollaboratorsContainer />
            <div className='flex justify-center space-x-4 items-start mt-3'>
              <TextField label='standard' variant='standard' fullWidth />
              <Button text='+&nbsp;Invite' red />
            </div>
          </Tile>
          <div className='flex flex-col'>
            <Tile title='Finish and Create Your Meet'>
              <div className='w-full flex justify-center'>
                <LargeButton text='Beam me up, Scotty!' />
              </div>
            </Tile>
            <div className='w-full grow justify-center items-center hidden sm:flex xl:hidden mb-8'>
              <img src={RutgersLogoUrl} alt='Rutgers Logo'
                className='w-auto h-24 opacity-40 ' />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CreateMeeting;
