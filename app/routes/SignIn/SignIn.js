import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import I18n from 'react-native-i18n';

import { Button, FormLabel, FormInput } from 'react-native-elements'
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comigre</Text>
      </View>

      <View style={{ width: Dimensions.get('window').width, paddingLeft: 10, paddingRight: 10, flexDirection: 'column' }}>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => updateState({ email })}/>

        <FormLabel>{I18n.t('password')}</FormLabel>
        <FormInput onChangeText={(password) => updateState({ password })}/>

        {confirmPasswordVisible ?
          <View>
            <FormLabel>{I18n.t('passwordConfirm')}</FormLabel>
            <FormInput onChangeText={(confirmPassword) => updateState({ confirmPassword })}/>
          </View>
        : null}

        <Button
          raised
          large
          backgroundColor="#58ad9d"
          buttonStyle={{ marginTop: 30 }}
          borderRadius={50}
          onPress={signIn}
          title={I18n.t('signIn')} />

        <View style={{ marginTop: 30, justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text onPress={createAccount} style={{ fontWeight: 'bold', marginLeft: 20 }}>{I18n.t('createAccount')}</Text>
          <Text onPress={props.signInAnonymously} style={{ fontWeight: 'bold', marginRight: 20 }}>{I18n.t('signInAnonymously')}</Text>
        </View>
      </View>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>

      </View>
      <KeyboardSpacer />
    </View>
  );
};

SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  signInAnonymously: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;
