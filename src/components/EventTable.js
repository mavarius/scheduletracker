const React = require('react');
const moment = require('moment');

const EventTable = props => {
  const { events, editEvent, deleteEvent } = props;
  return (
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id} id={event.id} className="eventID">
              <td className="eventDetails">{event.eDetails}</td>
              <td className="eventStart">{event.eStart}</td>
              <td className="eventEnd">{event.eEnd}</td>
              <td><button onClick={() => editEvent(event.id)} className="btn btn-warning">Edit</button></td>
              <td><button onClick={() => deleteEvent(event.id)} className="btn btn-danger">X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

module.exports = EventTable;
