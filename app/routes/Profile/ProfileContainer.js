import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

const ProfileContainer = ({ detailsReady, event, place }) => {
  return (
    <Profile detailsReady={detailsReady} event={event} place={place} />
  );
}

ProfileContainer.propTypes = {
  place: React.PropTypes.object,
};

export default createContainer(({ place }) => {
  const handle = Meteor.subscribe('events');

  return {
    detailsReady: handle.ready(),
    event: Meteor.collection('events').findOne({ _id: place.detailsId })
  };
}, ProfileContainer);
