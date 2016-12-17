import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import I18n from 'react-native-i18n';

import FitImage from 'react-native-fit-image';

import { Button, FormLabel, FormInput } from 'react-native-elements'
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;
//
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FitImage
          source={images.icon}
          resizeMode="contain"
          style={{
            height: 125,
            width: 125,
          }}
        />
      </View>

      <View style={{  marginTop: 20, width: Dimensions.get('window').width, paddingLeft: 30, paddingRight: 30, flexDirection: 'column' }}>
        <FormInput
          underlineColorAndroid="transparent"
          placeholderTextColor="gray"
          placeholder="Email"
          inputStyle={{ color: 'white', borderBottomWidth: 1, borderBottomColor:'gray',}}
          onChangeText={(email) => updateState({ email })}
        />

        <FormInput
          underlineColorAndroid="transparent"
          placeholderTextColor="gray"
          secureTextEntry={true}
          placeholder={I18n.t('password')}
          inputStyle={{ color: 'white', borderBottomWidth: 1, borderBottomColor:'gray', marginTop: 20}}
          onChangeText={(password) => updateState({ password })}
        />

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
          buttonStyle={{ marginTop: 30, padding: 12 }}
          borderRadius={50}
          onPress={signIn}
          title={I18n.t('signIn')} />

        <View style={{ marginTop: 30, justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity onPress={createAccount}>
            <Text style={{ color: 'gray', fontWeight: 'bold', marginLeft: 20 }}>{I18n.t('createAccount')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.signInAnonymously}>
            <Text style={{ color: 'gray', fontWeight: 'bold', marginRight: 20 }}>{I18n.t('signInAnonymously')}</Text>
          </TouchableOpacity>
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
