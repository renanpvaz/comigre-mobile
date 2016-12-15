import React from 'react';
import MapExample from './Map';
import Meteor, { createContainer } from 'react-native-meteor';
import Routes from '../../config/routes';

const MapContainer = (props) => {
  return (
    <MapExample
      places={props.places}
      placesReady={props.placesReady}
    />
  );
};

MapContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('allPlaces');

  return {
    placesReady: handle.ready(),
    places: Meteor.collection('places').find()
  };
}, MapContainer);
