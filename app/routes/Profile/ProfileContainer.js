import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import I18n from 'react-native-i18n';

import Profile from './Profile';

const ProfileContainer = ({ detailsReady, event, place, translation }) => {
  return (
    <Profile
      detailsReady={detailsReady}
      translation={translation}
      event={event}
      place={place} />
  );
}

ProfileContainer.propTypes = {
  place: React.PropTypes.object,
};

export default createContainer(({ place }) => {
  const handle = Meteor.subscribe('events');

  Meteor.subscribe('codeTranslations', I18n.currentLocale());

  return {
    detailsReady: handle.ready(),
    event: Meteor.collection('events').findOne({ _id: place.detailsId }),
    translation: Meteor.collection('translations').findOne({ placeId: place._id })
  };
}, ProfileContainer);
