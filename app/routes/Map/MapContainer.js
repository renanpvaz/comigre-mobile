import React from 'react';
import MapExample from './Map';
import Routes from '../../config/routes';

const MapContainer = (props) => {
  return (
    <MapExample></MapExample>
  );
};

MapContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default MapContainer;
