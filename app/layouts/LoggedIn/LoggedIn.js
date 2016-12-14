import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Map',
    };
  }

  renderTabItem(title, initialRoute, Icon) {
    const { selectedTab } = this.state;

    return (
      <TabNavigator.Item
        selectedTitleStyle={{ color: '#39BD98' }}
        selected={selectedTab === title}
        title={title}
        renderIcon={() => <Image style={styles.icon} source={Icon} />}
        renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
        onPress={() => this.setState({ selectedTab: title })}
      >
        <ExNavigator
          initialRoute={initialRoute}
          style={{ flex: 1, margin: 0 }}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator tabBarStyle={{ height: 53 }}>
        {this.renderTabItem('Home', Routes.getHomeRoute(), images.icons.recents)}
        {this.renderTabItem('Map', Routes.getMapRoute(), images.icons.map)}
        {this.renderTabItem('Profile', Routes.getProfileRoute(), images.icons.guides)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
