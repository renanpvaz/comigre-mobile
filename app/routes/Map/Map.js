'use strict';

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

const accessToken = 'sk.eyJ1IjoicmVuYW5wdmF6IiwiYSI6ImNpdGQydzg3dzAxNXkyeHF1bmJxM2ZyYTIifQ.arXvbs6xq4HLmk5npZt9Ug';

Mapbox.setAccessToken(accessToken);

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        latitude: 0,
        longitude: 0
      },
      zoom: 15,
      userTrackingMode: Mapbox.userTrackingMode.follow
    };
  }

  componentWillReceiveProps(props) {
    const annotations = props.places
      .filter(place => !!place.location)
      .map(
        place => ({
          type: 'point',
          title: place.name || 'Teste',
          id: place._id,
          coordinates: [
            place.location.coordinates[1],
            place.location.coordinates[0]
          ],
        })
      );

    this.setState({ annotations });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          styleURL={Mapbox.mapStyles.basic}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable
        />
      </View>
    );
  }
}

MapExample.propTypes = {
  placesReady: React.PropTypes.bool,
  places: React.PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
  }
});

export default MapExample;
