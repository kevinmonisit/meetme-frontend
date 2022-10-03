import React from 'react';

interface CalendarInfo {
  calendarDocument: any,
  toggleDay: any,
  getTimeBlockColor: any,

}

interface CalendarProps {
  calendarInfo: CalendarInfo;
}

function Calendar(props: CalendarProps) {
  const { calendarInfo } = props;
  const { days, numberOfTimeBlocks, type } = calendarInfo;

  return (
    <div className="flex flex-row">
      {days.map((dayTitle, dayID) => (
        <Day
          title={dayTitle}
          key={uniqid()}
          dayID={dayID}
          toggleDay={toggleDay}
          numberOfTimeBlocks={numberOfTimeBlocks}
          getTimeBlockColor={getTimeBlockColor}
          calendarType={type}
        />
      ))}
    </div>
  );
}

function InteractiveCalendar() {
  return (
    <div className=''>
      Test
    </div>
  )
}

export default InteractiveCalendar;