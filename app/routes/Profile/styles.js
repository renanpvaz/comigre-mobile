import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  description: {
    fontSize: 18,
    marginTop: 20,
    lineHeight: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingBottom: 30
  },
  contactItem: {
    marginTop: 20,
    width: 200,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
