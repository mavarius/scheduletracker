const React = require('react');
const moment = require('moment');
const FormControl = require('./FormControl');
const EventTable = require('./EventTable');
const EditForm = require('./EditForm');
const Database = require('../Storage');

const App = React.createClass({
  getInitialState () {
    return {
      events: [],
      currentlyEditing: {},
      showModal: false
    }
  },

  componentWillMount () {
    this.setState(Database.retrieveData())
  },

  componentWillUpdate (nextProps, nextState) {
    Database.setData(nextState);
  },

  addEvent (formInput) {
    const { events } = this.state;

    let updatedEvents = [...events, formInput];
    updatedEvents = updatedEvents.sort((a, b) => {
                      if (a.dateStamp < b.dateStamp)
                        return -1;
                      if (a.dateStamp > b.dateStamp)
                        return 1;
                      return 0;
                    });

    this.setState({
      events: updatedEvents
    })
  },

  editEvent (id) {
    const { events, showModal } = this.state;

    let current = events.filter(event => event.id === id);

    this.setState({
      showModal:true
    })
  },

  deleteEvent (id) {
    const { events } = this.state;

    let remainingEvents = events.filter(event => event.id !== id);

    this.setState({
      events: remainingEvents
    })
  },

  render () {
    const { events } = this.state;

    return (
      <div className='container'>
        <h1>Schedule Tracker</h1>
        <FormControl addEvent={this.addEvent}/>
        <EventTable events={events} deleteEvent={this.deleteEvent} editEvent={this.editEvent}/>

      </div>
    )
  }
});

// <EditForm editEvent={this.editEvent} events={events} showModal={this.state.showModal}/>

module.exports = App;
