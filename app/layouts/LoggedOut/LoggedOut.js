import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';

import I18n from 'react-native-i18n';

I18n.defaultLocale = 'pt-BR';
I18n.locale = 'pt-BR';

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

const LoggedOut = () => {
  const route = Routes.getSignInRoute();
  return (
    <ExNavigator
      initialRoute={route}
      style={{ flex: 1 }}
      showNavigationBar={route.showNavigationBar}
    />
  );
};

export default LoggedOut;
