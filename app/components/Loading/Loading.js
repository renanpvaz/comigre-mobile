import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating
        color="#DF1562"
        size={props.size}
        {...props}
      />
    </View>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
