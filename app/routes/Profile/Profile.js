import React from 'react';
import { Text, View, Image } from 'react-native';
import Meteor from 'react-native-meteor';

import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';
import images from '../../config/images';
import styles from './styles';

const Profile = ({ detailsReady, event }) => {
  if (!detailsReady) {
    return <Loading />;
  }
  console.log(event);

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={images.profileHeader} />
      <View style={styles.body}>
        <Text>{event.name}</Text>
        <Button text="Sign Out" onPress={() => Meteor.logout()} />
      </View>
    </View>
  );
};

Profile.propTypes = {
  detailsReady: React.PropTypes.bool,
  event: React.PropTypes.object
};

export default Profile;
