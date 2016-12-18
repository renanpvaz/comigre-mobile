import React, { PropTypes } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import I18n from 'react-native-i18n';
import Meteor from 'react-native-meteor';

import Loading from '../../components/Loading';
import styles from './styles';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.renderCheckBox = this.renderCheckBox.bind(this);
    this.state = {
      selectedLanguage: I18n.currentLocale()
    };
  }

  renderCheckBox(title, langCode) {
    return (
      <View style={styles.languageItem}>
        <CheckBox
          left
          checkedColor="#39BD98"
          textStyle={{ color: '#757575' }}
          onPress={() => this.selectLanguage(langCode)}
          title={title}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          containerStyle={styles.checkBoxContainer}
          checked={this.state.selectedLanguage === langCode}
        />
      </View>
    )
  }

  selectLanguage(langCode) {
    this.setState({ selectedLanguage: langCode });
    I18n.locale = langCode;
    this.props.updateLanguage();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{I18n.t('language')}</Text>
        {this.renderCheckBox('Português', 'pt-BR')}
        {this.renderCheckBox('Français', 'fr')}
        {this.renderCheckBox('Español', 'es')}
        {this.renderCheckBox('English', 'en')}

        <View style={{ marginTop: 60 }}>
          <Button raised backgroundColor="#39BD98" title={I18n.t('signOut')} onPress={() => Meteor.logout()} />
        </View>
      </ScrollView>
    );
  }
};

Settings.propTypes = {
  updateLanguage: React.PropTypes.func
};

export default Settings;
