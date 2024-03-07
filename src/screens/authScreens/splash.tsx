import {useFocusEffect} from '@react-navigation/native';
import React, {FC, useCallback, useEffect} from 'react';
import {Image, View} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import * as Assets from '../../assets';
import * as Styles from '../../common/styles';
import * as Constants from '../../common/utils/constants';
import {fetchPosts} from '../../redux/rootAction';
import SplashStyles from '../../styles/authStyles/splash';

const Splash: FC = (props: any) => {
  // Props Variables
  const {navigation} = props;

  // Other Variables
  const {colors}: MD3Theme = useTheme();
  const {CommonStyles} = Styles;

  // Hooks Functions
  useFocusEffect(
    useCallback(() => {
      let isFocus: boolean = true;

      init();

      return (): void => {
        isFocus = false;
      };
    }, []),
  );

  const init = (): void => {
    setTimeout((): void => {
      navigation.navigate(Constants.ONBOARDINGS);
    }, Constants.SET_TIMEOUT_2500);
  };

  const fetchPosts = async () => {
    props.fetchPosts((res: any) => {
      const response = JSON.stringify(res);
      console.log('RESPONSE:::', response);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={Styles.screenContainer(colors.background)}>
      <View style={CommonStyles.screenSubContainer}>
        <View style={SplashStyles.screenCenter}>
          <Image
            resizeMode={Constants.CONTAIN}
            source={Assets.LOGO}
            style={Styles.imageView(RFPercentage(18.3), RFPercentage(19))}
          />
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPosts: (onResponse: any) => {
      dispatch(fetchPosts(onResponse));
    },
  };
};

export default connect(null, mapDispatchToProps)(Splash);
