import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

const ProfileContainer = ({ detailsReady, event }) => {
  return (
    <Profile detailsReady={detailsReady} event={event} />
  );
}

ProfileContainer.propTypes = {
  id: React.PropTypes.string,
};

export default createContainer(({ id }) => {
  const handle = Meteor.subscribe('events');

  console.log('id', id);

  return {
    detailsReady: handle.ready(),
    event: Meteor.collection('events').findOne({ _id: id })
  };
}, ProfileContainer);
