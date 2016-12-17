import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';
import I18n from 'react-native-i18n';

import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: I18n.t('map')
    };
  }

  componentWillMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    };

    navigator.geolocation.getCurrentPosition(
       ({ coords }) => {
         this.setState({ coords });
       },
       (error) => alert(JSON.stringify(error)),
       options
   );
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
         showNavigationBar={true}
        />

      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator tabBarStyle={{ height: 53 }}>
        {this.renderTabItem(I18n.t('recents'), Routes.getHomeRoute(), images.icons.recents)}
        {this.renderTabItem(I18n.t('map'), Routes.getMapRoute(), images.icons.map)}
        {this.renderTabItem(I18n.t('guides'), Routes.getProfileRoute(), images.icons.guides)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
