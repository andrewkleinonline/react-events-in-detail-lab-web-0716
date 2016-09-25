const React = require('react');

class CoordinatesButton extends React.Component {

  render() {
    return(
      <button onClick={event => {
          const coordinates = [event.clientX, event.clientY];
          this.props.onReceiveCoordinates(coordinates);
        }
      }>Coordinates!</button>
    )
  }

}

CoordinatesButton.defaultProps = {
  onReceiveCoordinates: coords => console.log(coords)
};

module.exports = CoordinatesButton;
