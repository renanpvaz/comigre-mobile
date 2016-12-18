import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Settings from './Settings';

const SettingsContainer = ({ onLanguageSelected }) => {
  return (
    <Settings updateLanguage={onLanguageSelected} />
  );
};

SettingsContainer.propTypes = {
  onLanguageSelected: React.PropTypes.func
};

export default SettingsContainer
