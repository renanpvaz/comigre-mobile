import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const window = Dimensions.get('window');
const MARGIN_HORIZONTAL = 10;
const cardSize = (window.width - (MARGIN_HORIZONTAL * 4)) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: colors.background,
  },
});
