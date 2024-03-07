import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Colors from '../../common/utils/colors';

const OnBoardingsStyles = StyleSheet.create({
  backContainer: {
    alignItems: 'center',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonsContainer: {
    backgroundColor: Colors.TRANSPARENT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(3.2),
    paddingVertical: RFPercentage(1.6),
  },
  backIndividualContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotsContainer: {
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: RFPercentage(3.4),
    paddingTop: RFPercentage(1.6),
  },
  dotsIndividualContainer: {
    borderRadius: RFPercentage(0.8) / 2,
    borderWidth: RFPercentage(0.14),
  },
  onBoardItemContainer: {
    backgroundColor: Colors.TRANSPARENT,
    flex: 1,
    justifyContent: 'flex-end',
  },
  skipContainer: {
    alignItems: 'center',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default OnBoardingsStyles;
