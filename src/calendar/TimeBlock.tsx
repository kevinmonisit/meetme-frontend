import React from 'react';

interface TimeBlockProps {
  toggleDay: any;
  timeBlockIndex: number;
  dayID: number;
  calendarType: string;
  getTimeBlockColor: any;
}

function TimeBlock(props) {
  const {
    toggleDay,
    timeBlockIndex,
    dayID,
    calendarType,
    getTimeBlockColor
  } = props;
  const [toggle, setToggle] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    toggleDay(dayID, timeBlockIndex, calendarType);
  };

  return (
    <input
      type="button"
      className={`w-20 h-5 ${getTimeBlockColor(
        dayID,
        timeBlockIndex,
        calendarType,
      )} border-x border-zinc block`}
      onClick={handleToggle}
    />
  );
}
