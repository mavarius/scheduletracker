const React = require('react');
const moment = require('moment');
const FormControl = require('./FormControl');
const EventTable = require('./EventTable');
const Database = require('../Storage');

const App = React.createClass({
  getInitialState () {
    return {
      events: [],
      formDetails: {}
    }
  },

  componentWillMount () {
    this.setState(Database.retrieveData())
  },

  componentWillUpdate (nextProps, nextState) {
    Database.setData(nextState);
  },

  addEvent (formInput) {
    const { events, formDetails } = this.state;

    this.setState({
      formDetails: formInput,
      events: [...events, formInput]
    })

    console.log('events: ', events);
  },

  deleteEvent (id) {
    const { events } = this.state;

    let remainingEvents = events.filter(event => event.id !== id);
    console.log(remainingEvents);

    this.setState({
      events: remainingEvents
    })
  },

  render () {
    return (
      <div className='container'>
        <h1>Schedule Tracker</h1>
        <FormControl addEvent={this.addEvent}/>
        <EventTable events={this.state.events} deleteEvent={this.deleteEvent} editEvent={this.editEvent}/>
      </div>
    )
  }
});

module.exports = App;
