import {useFocusEffect} from '@react-navigation/native';
import React, {
  FC,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  BackHandler,
  NativeScrollEvent,
  NativeScrollPoint,
  NativeSyntheticEvent,
  Pressable,
  ScaledSize,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, MD3Theme, Text, useTheme} from 'react-native-paper';
import {RFPercentage} from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Styles from '../../common/styles';
import * as Colors from '../../common/utils/colors';
import * as Constants from '../../common/utils/constants';
import * as Interfaces from '../../configs/ts/interfaces';
import OnBoardingsStyles from '../../styles/authStyles/onBoardings';

const OnBoardings: FC = (props: any) => {
  // Props Variables
  const {} = props;

  // UseState Variables
  const [exitCount, setExitCount] = useState<number>(Constants.ZERO);
  const [sliderIndex, setSliderIndex] = useState<number>(Constants.ZERO);

  // Ref Variables
  const scrollViewRef: MutableRefObject<any> = useRef<any>(null);

  // Other Variables
  const {colors}: MD3Theme = useTheme();
  const {width}: ScaledSize = useWindowDimensions();
  const {ButtonStyles} = Styles;
  const onboardingData: Interfaces.OnBoardDataInterface[] = [
    {
      title: `The Power\nWorkout`,
      content:
        'Achieve your fitness goals with our expert trainers! Join us for personalized workouts that get results',
    },
    {
      title: `The Power\nWorkout`,
      content:
        'Achieve your fitness goals with our expert trainers! Join us for personalized workouts that get results',
    },
    {
      title: 'The Power Workout',
      content:
        'Achieve your fitness goals with our expert trainers! Join us for personalized workouts that get results',
    },
    {
      title: `Legs\nWorkout`,
      content:
        'Achieve your fitness goals with our expert trainers! Join us for personalized workouts that get results',
    },
  ];

  // Hooks Functions
  useFocusEffect(
    useCallback(() => {
      let isFocus = true;

      BackHandler.addEventListener('hardwareBackPress', backAction);

      return (): void => {
        isFocus = false;

        BackHandler.removeEventListener('hardwareBackPress', backAction);
      };
    }, [exitCount]),
  );

  const backAction = () => {
    switch (exitCount) {
      case Constants.ZERO:
        setExitCount(exitCount + Constants.ONE);

        showMessage({
          icon: 'auto',
          message: Constants.EXIT_APP,
          position: Constants.BOTTOM,
          type: Constants.DEFAULT,
        });
        break;

      case Constants.ONE:
        setExitCount(Constants.ZERO);

        BackHandler.exitApp();
        break;

      default:
        break;
    }

    return true;
  };

  useFocusEffect(
    useCallback(() => {
      let isFocus: boolean = true;

      handleSlider();

      return (): void => {
        isFocus = false;
      };
    }, [width]),
  );

  const handleSlider = (
    action: null | string = null,
    scrollIndex: null | number = null,
  ): void => {
    const lastIndex: number = onboardingData.length - Constants.ONE;

    switch (action) {
      case Constants.DECREMENT:
        const checkIsFirst: boolean = sliderIndex == Constants.ZERO;

        scrollViewRef.current?.scrollTo({
          x: (checkIsFirst ? sliderIndex : sliderIndex - Constants.ONE) * width,
          animated: true,
        });
        break;

      case Constants.INCREMENT:
        const checkIsLast: boolean = lastIndex == sliderIndex;

        scrollViewRef.current?.scrollTo({
          x: (checkIsLast ? sliderIndex : sliderIndex + Constants.ONE) * width,
          animated: true,
        });
        break;

      case Constants.SKIP:
        break;

      default:
        scrollViewRef.current?.scrollTo({
          x:
            (scrollIndex || scrollIndex == Constants.ZERO
              ? scrollIndex
              : sliderIndex) * width,
          animated: false,
        });
        break;
    }
  };

  // Functions
  const renderBackSkipButtons = (): React.JSX.Element => {
    return (
      <View style={OnBoardingsStyles.buttonsContainer}>
        <View style={OnBoardingsStyles.backContainer}>
          {sliderIndex != Constants.ZERO && (
            <Pressable
              onPress={(): void => {
                handleSlider(Constants.DECREMENT);
              }}
              style={OnBoardingsStyles.backIndividualContainer}>
              <MaterialIcons
                color={colors.surface}
                name={'arrow-back-ios'}
                size={RFPercentage(1.575)}
              />
              <Text
                style={[
                  Styles.padding(RFPercentage(0.4), 0),
                  Styles.textViewRoboto(
                    RFPercentage(1.4),
                    '400',
                    colors.surface,
                  ),
                ]}>
                {Constants.BACK}
              </Text>
            </Pressable>
          )}
        </View>
        <View style={OnBoardingsStyles.skipContainer}>
          {onboardingData.length - Constants.ONE != sliderIndex && (
            <Pressable
              style={OnBoardingsStyles.backIndividualContainer}
              onPress={(): void => {
                handleSlider(Constants.SKIP);
              }}>
              <Text
                style={[
                  Styles.padding(RFPercentage(0.4), 0),
                  Styles.textViewRoboto(
                    RFPercentage(1.4),
                    '400',
                    colors.surface,
                  ),
                ]}>
                {Constants.SKIP}
              </Text>
              <MaterialIcons
                color={colors.surface}
                name={'arrow-forward-ios'}
                size={RFPercentage(1.575)}
              />
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  const renderOnBoards = (): React.JSX.Element => {
    const handleOnScroll = (
      event: NativeSyntheticEvent<NativeScrollEvent>,
    ): void => {
      const {x}: NativeScrollPoint = event.nativeEvent.contentOffset;
      ``;
      const indexOfNextScreen: number = Math.round(x / width);

      if (indexOfNextScreen != sliderIndex) {
        setSliderIndex(indexOfNextScreen);
      }
    };

    const renderOnBoardItem = (
      onBoardItem: Interfaces.OnBoardDataInterface,
      onBoardIndex: number,
    ): React.JSX.Element => {
      const content: string = onBoardItem.content;

      const title: string = onBoardItem.title;

      return (
        <View
          style={[OnBoardingsStyles.onBoardItemContainer, {width}]}
          key={onBoardIndex}>
          <View style={Styles.padding(RFPercentage(3.6), 0)}>
            <Text
              style={Styles.textViewSaira(
                RFPercentage(3.79),
                '600',
                colors.surface,
                RFPercentage(4.548),
              )}>
              {title}
            </Text>
            <Text
              style={[
                Styles.padding(0, RFPercentage(1)),
                Styles.textViewRoboto(
                  RFPercentage(1.6),
                  '400',
                  colors.surface,
                  RFPercentage(1.875),
                ),
              ]}>
              {content}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <ScrollView
        horizontal
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          handleOnScroll(event);
        }}
        pagingEnabled
        ref={scrollViewRef}
        scrollEventThrottle={Constants.SIXTEEN}
        showsHorizontalScrollIndicator={false}>
        {onboardingData.map(
          (item: Interfaces.OnBoardDataInterface, index: number) =>
            renderOnBoardItem(item, index),
        )}
      </ScrollView>
    );
  };

  const renderNextButton = (): React.JSX.Element => {
    const renderIcon = (): React.JSX.Element => {
      return (
        <MaterialIcons
          color={colors.secondary}
          name={'arrow-forward-ios'}
          size={RFPercentage(1.8)}
        />
      );
    };

    return (
      <View style={Styles.padding(RFPercentage(3.6), RFPercentage(1.8))}>
        <Button
          contentStyle={ButtonStyles.defaultContentRowReverseStyle}
          icon={() => renderIcon()}
          labelStyle={ButtonStyles.defaultLabelStyle}
          mode={Constants.ELEVATED}
          onPress={() => {
            handleSlider(Constants.INCREMENT);
          }}
          style={ButtonStyles.defaultStyle}
          textColor={colors.secondary}>
          {Constants.NEXT}
        </Button>
      </View>
    );
  };

  const renderOnBoardsDots = (): React.JSX.Element => {
    const onBoardsLength: number = onboardingData.length;

    return (
      <View style={OnBoardingsStyles.dotsContainer}>
        {Array.from(Array(onBoardsLength).keys()).map(
          (_: number, index: number) => (
            <Pressable
              onPress={() => {
                handleSlider(null, index);
              }}
              style={[
                OnBoardingsStyles.dotsIndividualContainer,
                Styles.imageView(
                  RFPercentage(0.8),
                  RFPercentage(sliderIndex == index ? 4 : 0.8),
                ),
                {
                  backgroundColor: colors.primary,
                  borderColor:
                    sliderIndex == index ? Colors.TRANSPARENT : Colors.WHITE,
                  marginLeft: index != Constants.ZERO ? RFPercentage(1) : 0,
                  opacity: sliderIndex >= index ? 1 : 0.3,
                },
              ]}
              key={index}
            />
          ),
        )}
      </View>
    );
  };

  return (
    <View style={Styles.screenContainer(colors.background)}>
      {renderBackSkipButtons()}
      {renderOnBoards()}
      {renderNextButton()}
      {renderOnBoardsDots()}
    </View>
  );
};

export default OnBoardings;
