import React from 'react';
import { Text, View, Image } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import I18n from 'react-native-i18n';

import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';

I18n.translations = {
  'pt-BR': {
    signIn: 'Entrar',
    signInAnonymously: 'Entrar anônimamente',
    createAccount: 'Criar conta'
  },
  en: {
    signIn: 'Sign In',
    signInAnonymously: 'Sign In Anonymously',
    createAccount: 'Create Account'
  },
  fr: {
    signIn: 'Guides',
    signInAnonymously: 'Carte',
    createAccount: 'Recént'
  }
};

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Comigre</Text>
      </View>

      <InputWrapper>
        <GenericTextInput
          placeholder="email address"
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          placeholder="password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        : null}
      </InputWrapper>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button text={I18n.t('signIn')} onPress={signIn} />
        <Button text={I18n.t('signInAnonymously')} onPress={props.signInAnonymously} />
        <Button text={I18n.t('createAccount')} onPress={createAccount} />
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
