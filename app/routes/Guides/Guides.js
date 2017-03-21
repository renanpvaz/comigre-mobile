import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';

class Guides extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginLeft: 0, marginRight: 0 }}>
          <Text style={{ alignSelf: 'center', margin: 20, fontSize: 20 }}>...</Text>
        </ScrollView>
      </View>
    );
  }
}

Guides.propTypes = {};

export default Guides;
