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
      selectedTab: 'map'
    };
  }

  renderTabItem({ title, id }, initialRoute, Icon) {
    const { selectedTab } = this.state;

    return (
      <TabNavigator.Item
        selectedTitleStyle={{ color: '#39BD98' }}
        selected={selectedTab === id}
        title={title}
        renderIcon={() => <Image style={styles.icon} source={Icon} />}
        renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
        onPress={() => this.setState({ selectedTab: id })}
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
    const { recents, map, settings, guides } = images.icons;
    const { getHomeRoute, getMapRoute, getSettingsRoute, getProfileRoute } = Routes;

    return (
      <TabNavigator tabBarStyle={{ height: 53 }}>
        {this.renderTabItem({ title: I18n.t('recents'), id: 'recents' }, getHomeRoute(), recents)}
        {this.renderTabItem({ title: I18n.t('map'), id: 'map' }, getMapRoute(), map)}
        {this.renderTabItem({ title: I18n.t('guides'), id: 'guides' }, getProfileRoute(), guides)}
        {this.renderTabItem({ title: I18n.t('settings'), id: 'settings' }, getSettingsRoute(() => this.forceUpdate()), settings)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
