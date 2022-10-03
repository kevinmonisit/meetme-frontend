import React from 'react';

function Day({
  title,
  numberOfTimeBlocks,
  dayID,
  toggleDay,
  getTimeBlockColor,
  calendarType,
}) {
  return (
    <div>
      {title}
      {[...Array(numberOfTimeBlocks).keys()].map((i, index) => (
        <TimeBlock
          key={uniqid()}
          timeBlockIndex={index}
          dayID={dayID}
          toggleDay={toggleDay}
          getTimeBlockColor={getTimeBlockColor}
          calendarType={calendarType}
        />
      ))}
    </div>
  );
}
