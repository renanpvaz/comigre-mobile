import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import images from '../../config/images';

import Loading from '../../components/Loading';
import { Card, ListItem, Icon } from 'react-native-elements'

import { MeteorListView } from 'react-native-meteor';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard(place) {
    return (
      <Card key={place._id} containerStyle={{  marginLeft: 0, marginRight: 0 }}>
        <Text>
          Eventos
        </Text>
        <Text style={styles.cardTitle}>
          {place.name}
        </Text>
        <Text>
          {place.description}
        </Text>
        <View style={styles.cardFooter}>
          <Text>
            12/02/2016
          </Text>
          <TouchableOpacity onPress={() => this.props.onDetailsPress(place.detailsId)} style={styles.cardDetails}>
            <Text style={{ color: '#777' }}>
              Ver Detalhes
            </Text>
            <Icon color="#777" name='keyboard-arrow-right' />
          </TouchableOpacity>
        </View>
      </Card>
    )
  }

  render() {
    if (!this.props.feedReady) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={{ marginLeft: 0, marginRight: 0 }}>
          {this.props.places.map(this.renderCard)}
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  feedReady: React.PropTypes.bool,
  places: React.PropTypes.array,
  onDetailsPress: React.PropTypes.func,
};

export default Home;
