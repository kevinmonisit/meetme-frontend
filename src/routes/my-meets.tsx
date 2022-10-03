import React from 'react';

interface MeetingCardData {
  name: string;
  owner: string;
  date: string;
  location: string;
}

interface MeetingCardProps {
  meetingInfo: MeetingCardData;
}

function MeetingCard(props: MeetingCardProps) {
  const { meetingInfo } = props;
  const { name, owner, date, location } = meetingInfo;

  return (
    <div className='w-25 h-25 p-5 m-8 bg-red-200 text-sm'>
      <span className='font-bold text-lg'>{name}</span>
      <br />
      <span className='text-xs'>{owner}</span>
      <br />
      {date}
      <br />
      {location}
    </div>
  );
}

interface MeetingListSectionProps {
  meetings: MeetingCardData[];
  title: string;
  inactive?: boolean;
}

function MeetingListSection(props: MeetingListSectionProps) {
  const { meetings, title, inactive } = props;
  return (
    <div className='w-full h-fit'>
      <div className='w-full text-center'>{title}</div>
      <div className='w-full h-fit bg-blue-400 my-2 flex flex-wrap'>
        {meetings.map((meeting) => (
          <MeetingCard meetingInfo={meeting} key={meeting.name + meeting.date} />
        ))}
      </div>
    </div>
  )
}

MeetingListSection.defaultProps = {
  inactive: false,
};

const MeetingCardTest = {
  name: 'MeetingCard',
  owner: 'Landom Witter (lw250)',
  date: 'No date specified',
  location: 'Hill Center Room 254'
};

const meetings = [{ ...MeetingCardTest }, { ...MeetingCardTest }, { ...MeetingCardTest }];

function MyMeets() {
  return (
    <div className='w-full h-full bg-gray-100 grow'>
      <div className='w-full font-bold text-3xl text-center mb-6 mt-10'>
        My Meets
      </div>
      <MeetingListSection meetings={meetings} title='Active Meets ' />
      <MeetingListSection meetings={meetings} title='Active Meets Shared With Me' />
      <MeetingListSection meetings={meetings} title='Inactive Meets' />
    </div>
  );
}

export default MyMeets;
