import React, { useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface CollaboratorMetadata {
  name: string;
  netID: string;
  profileColor: string;
}

function CollaboratorsContainer() {
  const [collaborators, setCollaborators] = React.useState<CollaboratorMetadata[]>([]);

  useEffect(() => {
    const jane: CollaboratorMetadata = {
      name: 'Jane Doe',
      netID: 'jdoe',
      profileColor: 'red',
    };

    const john: CollaboratorMetadata = {
      name: 'John Doe',
      netID: 'johndoe',
      profileColor: 'blue',
    };

    setCollaborators([jane, john,
      { ...jane }, { ...john }, { ...john }, { ...john },

    ]);

  }, []);

  return (
    <div
      className='w-full h-72 rounded-lg grid grid-cols-2 auto-rows-min mt-2'
    >
      {
        collaborators.map((collaborator) => (
          <div
            className='w-full text-gray-600 max-h-fit
             flex flex-row col-span-1 row-span-1 items-center'
            key={collaborator.netID}>
            <div
              className='rounded-full w-8 h-8 bg-red-500 m-2'
              style={{
                backgroundColor: collaborator.profileColor,
              }}
            />
            <div className='flex flex-col w-fit mt-2'>
              <div>{collaborator.name}</div>
              <div
                className='text-gray-500 text-xs ml-0.5'
              >
                {collaborator.netID}
              </div>
            </div>
            <span className='ml-10'>
              <HighlightOffIcon
                className='text-gray-400'
                sx={{


                }} />
            </span>
          </div>
        ))
      }
    </div>
  );
}

export default CollaboratorsContainer;
