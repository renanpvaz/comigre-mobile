import { AppRegistry } from 'react-native';
import App from './app';
import I18n from 'react-native-i18n';

I18n.defaultLocale = 'pt-BR';
I18n.locale = 'pt-BR';

I18n.translations = {
  'pt-BR': {
    password: 'Senha',
    guides: 'Guias',
    map: 'Mapa',
    recents: 'Recentes',
    signIn: 'Entrar',
    signInAnonymously: 'Entrar anônimamente',
    createAccount: 'Criar conta'
  },
  en: {
    password: 'Senha',
    guides: 'Guides',
    map: 'Map',
    recents: 'New',
    signIn: 'Sign In',
    signInAnonymously: 'Sign In Anonymously',
    createAccount: 'Create Account'
  },
  fr: {
    password: 'Senha',
    guides: 'Guides',
    map: 'Carte',
    recents: 'Recént',
    signIn: 'Guides',
    signInAnonymously: 'Carte',
    createAccount: 'Recént'
  }
};


AppRegistry.registerComponent('RNApp', () => App);
