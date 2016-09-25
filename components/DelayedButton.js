const React = require('react');

class DelayedButton extends React.Component {

  render() {

    return(
      <button onClick={event => {
          event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        }
      }>Delayed!</button>
    )
  }
}

DelayedButton.defaultProps = {
  onDelayedClick: event => {debugger;},
  delay: 1000
}

module.exports = DelayedButton;

// This component takes two props: onDelayedClick (a function), and delay (a number).
// When the button is clicked, we create an array with two elements:
//the X and Y coordinates of the button that you retrieve using the event data.
// The onReceiveCoordinates callback prop is then called with these coordinates.
//
