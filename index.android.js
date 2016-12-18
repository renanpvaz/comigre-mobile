import { AppRegistry } from 'react-native';
import App from './app';
import I18n from 'react-native-i18n';

I18n.defaultLocale = 'pt-BR';
I18n.locale = 'pt-BR';
I18n.fallbacks = true;

I18n.translations = {
  'pt-BR': {
    signOut: 'Desconectar-se',
    language: 'Idioma',
    password: 'Senha',
    settings: 'Configurações',
    passwordConfirm: 'Confirmar Senha',
    guides: 'Guias',
    map: 'Mapa',
    recents: 'Recentes',
    signIn: 'Entrar',
    signInAnonymously: 'Entrar anônimamente',
    createAccount: 'Criar conta'
  },
  en: {
    signOut: 'Sign Out',
    language: 'Language',
    password: 'Password',
    guides: 'Guides',
    settings: 'Settings',
    map: 'Map',
    recents: 'New',
    signIn: 'Sign In',
    signInAnonymously: 'Sign In Anonymously',
    createAccount: 'Create Account'
  },
  fr: {
    signOut: 'Se déconnecter',
    language: 'Langue',
    password: 'Mot de passe',
    guides: 'Guides',
    settings: 'Paramètres',
    map: 'Carte',
    recents: 'Recént',
    signIn: 'Entrer',
    signInAnonymously: 'Entrer anonymement',
    createAccount: 'Créer un compte'
  },
  es: {
    signOut: 'Desconectar',
    language: 'Idioma',
    password: 'contraseña',
    guides: 'Guías',
    map: 'Mapa',
    settings: 'Ajustes',
    recents: 'Reciente',
    signIn: 'Entrar',
    signInAnonymously: 'Firmar de forma anónima',
    createAccount: 'Regístrate'
  }
};


AppRegistry.registerComponent('RNApp', () => App);
