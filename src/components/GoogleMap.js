import React, { Component } from "react";

let mapList = {
	width: '150px',
	height: '150px'
};

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div style={mapList} ref="map" />;
  }
}

export default GoogleMap;
