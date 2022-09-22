import React, { useEffect } from 'react';

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

    setCollaborators([jane, john, { ...jane }]);

  }, []);

  return (
    <div
      className='w-full h-72 bg-gray-400 rounded-lg grid grid-cols-2 auto-rows-min grid-flow-col'
    >
      {
        collaborators.map((collaborator) => (
          <div
            className='w-full bg-gray-900 border-red-100 border-2 border-solid
            text-white max-h-fit flex flex-row'
            key={collaborator.netID}>
            <div
              className='rounded-full w-4 h-4'
              style={{
                backgroundColor: collaborator.profileColor,
              }}
            />
            {collaborator.name}
          </div>
        ))
      }
    </div>
  );
}

export default CollaboratorsContainer;
