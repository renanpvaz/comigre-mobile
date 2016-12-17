import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 0,
    backgroundColor: colors.background,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginBottom: 10
  },
  cardFooter: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
    flexDirection: 'row',
    borderTopWidth: .5,
    borderTopColor: 'rgb(220, 220, 220)',
    justifyContent: 'space-between',
  },
  cardDetails: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
