import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import LargeButton from '../components/LargeButton';
import Tile from '../components/Tile';

function CreateMeeting() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center">
      <div className="w-full font-bold text-3xl text-center mb-6 mt-10">
        Create a new Meet
      </div>
      <div
        className="flex flex-col md:flex-row"
      >
        <div>
          <Tile title="Name Your Meet">
            <TextField label="standard" variant="standard" fullWidth />
          </Tile>
          <Tile title="Location">
            <TextField label="standard" variant="standard" fullWidth />
          </Tile>
          <Tile title="Times">
            Show times between 9am and 5pm
          </Tile>
        </div>
        <div className="grow">
          <Tile
            title="Choose Your Days"
            subtitle="What days would you like to make available for scheduling?"
          >
            <div className="w-full h-72 bg-gray-400 rounded-lg" />
            <div>Or choose weekdays for repeated availability.</div>
            <div className=""></div>
          </Tile>
        </div>
        <div>
          <Tile title="Invite Your Collaborators">
            <div className="w-full h-72 bg-gray-400 rounded-lg" />
          </Tile>
          <Tile title="Finish and Create Your Meet">
            <LargeButton text="Beam me up, Scotty!" />
          </Tile>
        </div>
      </div>
    </div>
  );
}

export default CreateMeeting;
