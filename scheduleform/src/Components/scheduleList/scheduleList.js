import React from 'react';
import ScheduleItem from './scheduleItem/scheduleItem';

const ScheduleList = props => {
  let list = props.listItem;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
          <th scope="col">Room</th>
          <th scope="col">Subject</th>
          <th scope="col">Teacher</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <ScheduleItem
            key={item.id}
            date={item.date}
            startTime={item.startTime}
            endTime={item.endTime}
            room={item.room}
            subject={item.subject}
            teacher={item.teacher}
            description={item.description}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleList;
