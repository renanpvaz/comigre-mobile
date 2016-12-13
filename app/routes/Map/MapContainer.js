import React from 'react';
import Map from './Map';
import Routes from '../../config/routes';

const MapContainer = (props) => {
  return (
    <Map />
  );
};

MapContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default MapContainer;
