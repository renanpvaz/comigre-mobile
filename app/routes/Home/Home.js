import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

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
        <Button
          text="Details"
          onPress={this.props.onDetailsPress}
        />
      </View>
    );
  }
}

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Home;
