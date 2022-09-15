import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import Tile from '../components/Tile';

function CreateMeeting() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center">
      <div className="w-full font-bold text-3xl text-center my-6">
        Create a new Meet
      </div>
      <div
        className="flex flex-col md:flex-row w-full"
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
        <div className="grow bg-gray-600">
          <Tile
            title="Choose Your Days"
            subtitle="What days would you like to make available for scheduling?"
          >
            <div></div>
          </Tile>
        </div>
        <div>
          <Tile title="Invite Your Collaborators">

          </Tile>
          <Tile title="Finish and Create Your Meet">
            Beam me up, Scotty!
          </Tile>
        </div>
      </div>
    </div>
  );
}

export default CreateMeeting;
