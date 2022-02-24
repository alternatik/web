import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 41.16,
      lng: 29.10
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCGtIxgUA4DFVtI-MU61yMZPXRM_6uEpV0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.1665112}
            lng={29.1094644}
            text="Alternatik"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;