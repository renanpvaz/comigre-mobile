import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import FitImage from 'react-native-fit-image';

import images from './images';
import Home from '../routes/Home';
import Map from '../routes/Map';
import Details from '../routes/Details';
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
      renderRightButton() {
        return (
          <TouchableOpacity style={{ margin: 15 }}>
            <Image style={{ tintColor: '#929292', width: 25, height: 25  }} source={require('../images/settings-icon.png')} />
          </TouchableOpacity>
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
  getProfileRoute() {
    return {
      renderScene(navigator) {
        return <Profile navigator={navigator} />;
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
