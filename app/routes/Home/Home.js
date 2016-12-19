import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import I18n from 'react-native-i18n';

import styles from './styles';
import images from '../../config/images';
import { capitalize } from '../../lib/string';
import Loading from '../../components/Loading';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  getIconName(type) {
    let name;

    switch (type) {
      case 'type-event':
        name = 'event';
        break;
    }

    return name;
  }

  renderCard(place) {
    return (
      <Card key={place._id} containerStyle={{  marginLeft: 0, marginRight: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginBottom: 10 }}>
            {I18n.t('createdBy')}<Text style={{ color: '#DF1562' }}>{capitalize(place.user.username)}</Text>
          </Text>
          <Icon
            color="#DF1562"
            name={this.getIconName(place.type)} />
        </View>
        <Text style={styles.cardTitle}>
          {place.name}
        </Text>
        <Text>
          {place.description}
        </Text>
        <View style={styles.cardFooter}>
          <Text>
            {place.createdAt.toLocaleDateString()}
          </Text>
          <TouchableOpacity onPress={() => this.props.onDetailsPress(place)} style={styles.cardDetails}>
            <Text style={{ color: '#777' }}>
              {I18n.t('seeMore')}
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
          <Text style={{ alignSelf: 'center', margin: 20, fontSize: 20 }}>...</Text>
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
