import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import images from '../../config/images';

import Loading from '../../components/Loading';
import { Card, ListItem, Icon } from 'react-native-elements'

import { MeteorListView } from 'react-native-meteor';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCard(place) {
    return (
      <Card key={place._id} containerStyle={{  marginLeft: 0,marginRight: 0 }}>
        <Text>
          Eventos
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18, marginBottom: 10}}>
          {place.name}
        </Text>
        <Text>
          {place.description}
        </Text>
        <View style={{
          flex: 1,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text>
            12/02/2016
          </Text>
          <View style={{
            paddingLeft: 8,
            width: 100,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
            <Text style={{color: '#777'}}>
              Ver Detalhes
            </Text>
            <Icon color="#777" name='keyboard-arrow-right' />
          </View>
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
        <ScrollView style={{ marginLeft: 0,marginRight: 0 }}>
          {this.props.places.map(this.renderCard)}
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  feedReady: React.PropTypes.bool,
  places: React.PropTypes.array,
};

export default Home;
