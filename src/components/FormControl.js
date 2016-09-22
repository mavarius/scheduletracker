const React = require('react');
const moment = require('moment');

const FormControl = React.createClass({
  submitForm (e) {
    e.preventDefault();
    const { formDetails, formStart, formEnd } = this.refs;

    let rawDate = moment(formStart.value, "YYYY-MM-DD HH:mm:ss").format("X");

    let formInput = {
      id: moment().format("X"),
      dateStamp: moment(formStart.value, "YYYY-MM-DD HH:mm:ss").format("X"),
      eDetails: formDetails.value,
      eStart: moment(formStart.value, "YYYY-MM-DD HH:mm:ss").format("dddd, MMMM Do YYYY, h:mm a"),
      eEnd: moment(formEnd.value, "YYYY-MM-DD HH:mm:ss").format("dddd, MMMM Do YYYY, h:mm a")
    }

    formDetails.value = '';
    formStart.value = '';
    formEnd.value = '';
    rawDate = '';

    this.props.addEvent(formInput)
  },

  render () {
    return (
      <div className="row">
        <form className="form-inline" onSubmit={this.submitForm}>
        <h2>Create Event</h2>
          <div className="form-group">
            <label htmlFor="eventDetails">Event Details</label>
            <input type="text" className="form-control" id="eventDetails" ref="formDetails" placeholder="Enter Event Details" required/>
          </div>
          <div className="form-group">
            <label htmlFor="eventStart">Start</label>
            <input type="datetime-local" className="form-control" id="eventStart" ref="formStart" defaultValue="1999-12-31T23:59:00" required/>
          </div>
          <div className="form-group">
            <label htmlFor="eventEnd">End</label>
            <input type="datetime-local" className="form-control" id="eventEnd" ref="formEnd" defaultValue="2000-01-01T00:00:00"/>
          </div>
          <button type="submit" className="btn btn-primary">Create Event</button>
        </form>
      </div>
    )
  }
})

module.exports = FormControl;
