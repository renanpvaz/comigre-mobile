import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import FitImage from 'react-native-fit-image';

import images from './images';
import Home from '../routes/Home';
import Map from '../routes/Map';
import Profile from '../routes/Profile';
import SignIn from '../routes/SignIn';

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
        return (
          <FitImage
            source={images.logo}
            resizeMode="contain"
            style={{
              height: 50,
              width: 190,
              marginTop: 5,
            }}
          />
        );
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
        return (
          <FitImage
            source={images.logo}
            resizeMode="contain"
            style={{
              height: 50,
              width: 190,
              marginTop: 5,
            }}
          />
        );
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
  getProfileRoute(id) {
    return {
      renderScene(navigator) {
        return <Profile id={id} navigator={navigator} />;
      },

      showNavigationBar: false,
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
