import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import I18n from 'react-native-i18n';

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
      <CheckBox
        left
        checkedColor="#39BD98"
        onPress={() => this.selectLanguage(langCode)}
        title={title}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.selectedLanguage === langCode}
      />
    )
  }

  selectLanguage(langCode) {
    this.setState({ selectedLanguage: langCode });
    I18n.locale = langCode;
    this.props.updateLanguage();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 30, fontSize: 20, color: '#39BD98' }}>{I18n.t('language')}</Text>
        {this.renderCheckBox('Português', 'pt-BR')}
        {this.renderCheckBox('Français', 'fr')}
        {this.renderCheckBox('Español', 'es')}
        {this.renderCheckBox('English', 'en')}
      </View>
    );
  }
};

Settings.propTypes = {
  updateLanguage: React.PropTypes.func
};

export default Settings;
