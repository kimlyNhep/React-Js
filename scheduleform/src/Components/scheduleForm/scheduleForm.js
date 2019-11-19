import React, { Component } from 'react';
import './formStyle.css';

class ScheduleForm extends Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      date: '',
      startTime: '',
      endTime: '',
      room: '',
      subject: '',
      teacher: '',
      description: ''
    };
  }

  onSubmitItem(event) {
    event.preventDefault();
    this.props.submitItem(this.state);
    this.setState({
      id: '',
      date: '',
      startTime: '',
      endTime: '',
      room: '',
      subject: '',
      teacher: '',
      description: ''
    });
  }

  onChangeHandle(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitItem.bind(this)} className="Form--container">
        <div className="form-group row">
          <label htmlFor="id" className="col-sm-2 col-form-label">
            ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="id"
              className="form-control"
              onChange={event => this.onChangeHandle(event)}
              value={this.state.id}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="date" className="col-sm-2 col-form-label">
            Date:
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              name="date"
              className="form-control"
              value={this.state.date}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="startTime" className="col-sm-2 col-form-label">
            Start Time:
          </label>
          <div className="col-sm-10">
            <input
              type="time"
              name="startTime"
              className="form-control"
              value={this.state.startTime}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="endTime" className="col-sm-2 col-form-label">
            End Time:
          </label>
          <div className="col-sm-10">
            <input
              type="time"
              name="endTime"
              className="form-control"
              value={this.state.endTime}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="room" className="col-sm-2 col-form-label">
            Room:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="room"
              className="form-control"
              value={this.state.room}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="subject"
              className="form-control"
              value={this.state.subject}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="teacher" className="col-sm-2 col-form-label">
            Teacher:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="teacher"
              className="form-control"
              value={this.state.teacher}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={event => this.onChangeHandle(event)}
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    );
  }
}

export default ScheduleForm;
