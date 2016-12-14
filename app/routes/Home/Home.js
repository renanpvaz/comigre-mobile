import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { logo } from '../../config/images';

import { Card, ListItem, Button } from 'react-native-elements'

class Home extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home'
    },
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          Home
        </Text>
        <Card
          title='HELLO WORLD'
          image={logo}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
