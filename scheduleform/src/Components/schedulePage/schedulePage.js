import React, { Component } from 'react';
import ScheduleForm from '../scheduleForm/scheduleForm';
import ScheduleList from '../scheduleList/scheduleList';

class SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  onSubmitHandle(newItem) {
    this.setState({ items: [...this.state.items, newItem] });
  }

  render() {
    return (
      <div>
        <ScheduleForm submitItem={this.onSubmitHandle.bind(this)} />
        <ScheduleList listItem={this.state.items} />
      </div>
    );
  }
}

export default SchedulePage;
