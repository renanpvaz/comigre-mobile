import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';
import { capitalize } from '../../lib/string';
import images from '../../config/images';
import styles from './styles';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.renderCoverImage = this.renderCoverImage.bind(this);
    this.renderContactInfo = this.renderContactInfo.bind(this);
  }

  renderCoverImage() {
    const [lng, lat] = this.props.place.location.coordinates;

    const baseUri = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/static';
    const accessToken = 'pk.eyJ1IjoicmVuYW5wdmF6IiwiYSI6ImNpdnZ4c3N4ajAwanoyenBzeXE4eGxtMnkifQ.9Zcet3LJ7DRfP7rgnqfWyA';
    const params = `${lng},${lat},18,0,0/1280x800?access_token=${accessToken}`;

    return (
      <Image style={styles.header} source={{ uri: `${baseUri}/${params}` }} />
    );
  }

  renderContactInfo(info) {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{
          marginTop: 20,
          width: 200,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <Icon
            color="#DF1562"
            name="email" />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>{info.email}</Text>
        </View>
        <View style={{
          marginTop: 20,
          width: 200,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <Icon
            color="#DF1562"
            name="assignment-ind" />
          <Text style={{ fontSize: 17, marginLeft: 10 }}>{info.name}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { event, place } = this.props;

    if (!this.props.detailsReady) {
      return <Loading />;
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderCoverImage()}
        <View elevation={5} style={styles.body}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{event.name}</Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Cadastrado por <Text style={{ color: '#DF1562' }}>{capitalize(place.user.username)}</Text>
          </Text>
          <Text style={styles.description}>{event.description}</Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Contato</Text>
          {this.renderContactInfo(place.contact)}
        </View>
      </ScrollView>
    );
  }
};

Details.propTypes = {
  detailsReady: React.PropTypes.bool,
  event: React.PropTypes.object,
  place: React.PropTypes.object
};

export default Details;
