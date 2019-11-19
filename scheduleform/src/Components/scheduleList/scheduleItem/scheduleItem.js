import React from 'react';

const ScheduleItem = props => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.startTime}</td>
      <td>{props.endTime}</td>
      <td>{props.room}</td>
      <td>{props.subject}</td>
      <td>{props.teacher}</td>
      <td>{props.description}</td>
    </tr>
  );
};

export default ScheduleItem;
