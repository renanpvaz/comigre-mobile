import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Guides from './Guides';
import Routes from '../../config/routes';

const GuidesContainer = (props) => {
  return (
    <Guides />
  );
};

GuidesContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default createContainer(() => {
  return {};
}, GuidesContainer);
