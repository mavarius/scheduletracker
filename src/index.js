// MVP
// TODO: User can create and view events
// TODO: Form Elements: Title, Start Time, End Time
// TODO: User can delete events
// TODO: User can edit events
// TODO: Events are organized chronologically
// TODO: User can view Schedule again after refreshing the webpage


const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = React.PropTypes;
const moment = require('moment');

const App = require('./components/App');

require("./css/stylesheet.css");

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
