import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Home from './Home';
import Routes from '../../config/routes';

const HomeContainer = (props) => {
  return (
    <Home
      feedReady={props.feedReady}
      places={props.places}
      onDetailsPress={
        (place) => props.navigator.push(
          Routes.getProfileRoute(place, () => props.navigator.pop())
        )
      }
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('allPlaces');

  return {
    feedReady: handle.ready(),
    places: Meteor.collection('places').find()
  };
}, HomeContainer);
