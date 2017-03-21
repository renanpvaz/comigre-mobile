import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Icon } from 'react-native-elements';
import I18n from 'react-native-i18n';

import images from './images';
import Home from '../routes/Home';
import Guides from '../routes/Guides';
import Map from '../routes/Map';
import Profile from '../routes/Profile';
import Settings from '../routes/Settings';
import SignIn from '../routes/SignIn';

const title = (
  <View style={{ flex: 1, alignItems: 'center', width: 200, justifyContent: 'center' }}>
    <FitImage
      source={images.logo}
      resizeMode="contain"
      style={{
        height: 40,
        width: 150,
        marginTop: 5,
      }}
    />
  </View>
);

export const routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },

      renderTitle() {
        return title;
      },

      showNavigationBar: true,
    };
  },
  getGuidesRoute() {
    return {
      renderScene(navigator) {
        return <Guides navigator={navigator} />;
      },

      getTitle() {
        return 'Guides';
      },

      renderTitle() {
        return title;
      },
    };
  },
  getSettingsRoute(onLanguageSelected) {
    return {
      renderScene(navigator) {
        return <Settings onLanguageSelected={onLanguageSelected} navigator={navigator} />;
      },

      getTitle() {
        return 'Settings';
      },

      renderTitle() {
        return title;
      },

      showNavigationBar: true,
    };
  },
  getMapRoute() {
    return {
      renderScene(navigator) {
        return <Map navigator={navigator} />;
      },

      getTitle() {
        return 'Mapa';
      },

      renderTitle() {
        return title;
      },

      showNavigationBar: true
    };
  },
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <Details navigator={navigator} />;
      },

      getTitle() {
        return 'Details';
      },

    };
  },
  getSignInRoute() {
    return {
      renderScene(navigator) {
        return <SignIn navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
};

export default routes;
