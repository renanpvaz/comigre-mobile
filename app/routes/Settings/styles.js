import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 55,
    backgroundColor: 'white',
  },
  title: {
    padding: 30,
    paddingBottom: 20,
    fontSize: 20,
    color: '#39BD98'
  },
  languageItem: {
    paddingBottom: 10,
    paddingTop: 10,
    width: Dimensions.get('window').width,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6'
  },
  checkBoxContainer: {
    backgroundColor: 'white',
    margin: 0,
    borderWidth: 0
  },
});
