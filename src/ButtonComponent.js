import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './common/Button';

const propTypes = {
  ...Button.propTypes,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  shape: PropTypes.string,
  gradientStart: PropTypes.array,
  gradientEnd: PropTypes.array,
  backgroundColors: PropTypes.array,
  buttonStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  progressSize: PropTypes.number,
  onPress: PropTypes.func,
};

const defaultProps = {
  type: 'primary',
  shape: 'round',
  backgroundColors: ['#4DC7A4', '#66D37A'],
  gradientStart: [0.5, 1],
  gradientEnd: [1, 1],
  width: null,
  height: 50,
};

class ButtonComponent extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  shouldComponentUpdate(nextProps) {
    if (this.props.image !== nextProps.image) return true;
    if (this.props.text !== nextProps.text) return true;
    if (this.props.states && this.props.buttonState !== nextProps.buttonState) return true;
    if (this.props.states && this.props.states[this.props.buttonState].progressFill) return true;
    return false;
  }

  renderButton({ textStyle = styles.text, imageStyle = styles.image }) {
    let button;

    if (this.props.states) {
      const addedAnimtionConfigButtonStates = configButtonStatesAnimation(
        this.props.states,
        this.props.height
      );
      button = (
        <Button
          states={addedAnimtionConfigButtonStates}
          buttonState={this.props.buttonState}
          textStyle={this.props.textStyle || textStyle}
          imageStyle={this.props.imageStyle || imageStyle}
          imageAnimConfig={this.props.imageAnimConfig}
          textAnimConfig={this.props.textAnimConfig}
          spinnerAnimConfig={this.props.spinnerAnimConfig}
          spinner={this.props.spinner}
          spinnerSize={this.props.spinnerSize}
          spinnerType={this.props.spinnerType}
          spinnerStyle={this.props.spinnerStyle}
          spinnerColor={this.props.spinnerColor}
          progressAnimConfig={this.props.progressAnimConfig}
          progressSize={this.props.progressSize}
          progressWidth={this.props.progressWidth}
          progressTintColor={this.props.progressTintColor}
          progressBackgroundColor={this.props.progressBackgroundColor}
          progressStyle={this.props.progressStyle}
          textInsideProgress={this.props.textInsideProgress}
        />
      );
    } else {
      button = (
        <Button
          textStyle={this.props.textStyle || textStyle}
          imageStyle={this.props.imageStyle || imageStyle}
          text={this.props.text}
          image={this.props.image}
        />
      );
    }

    return button;
  }

  render() {
    let content;
    let shape;

    const currentButtonState = (this.props.buttonState && this.props.states)
      ? this.props.states[this.props.buttonState]
      : this.props;
    const gradientStart = currentButtonState.gradientStart
      ? currentButtonState.gradientStart
      : this.props.gradientStart;
    const gradientEnd = currentButtonState.gradientEnd
      ? currentButtonState.gradientEnd
      : this.props.gradientEnd;
    const backgroundColors = currentButtonState.backgroundColors || this.props.backgroundColors;
    const type = currentButtonState.type ? currentButtonState.type : this.props.type;

    const buttonHeight = currentButtonState.height ? currentButtonState.height : this.props.height;
    const buttonWidth = currentButtonState.width ? currentButtonState.width : this.props.width;

    if (this.props.shape === 'round' || this.props.shape === 'circle') {
      shape = {
        borderRadius: buttonHeight / 2,
      };
    }

    if (type === 'primary') {
      content = (
        <LinearGradient
          start={gradientStart}
          end={gradientEnd}
          colors={backgroundColors}
          collapsable={false}
          style={[styles.button, shape, currentButtonState.buttonStyle]}
        >
          {this.renderButton({ textStyle: styles.text })}
        </LinearGradient>
      );
    } else {
      const border = type === 'border' && styles.border;
      content = (
        <View style={[styles.button, border, shape, currentButtonState.buttonStyle]}>
          {this.renderButton({ textStyle: styles.secondaryText })}
        </View>
      );
    }

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={currentButtonState.onPress}
        activeOpacity={0.9}
        style={[styles.container, { width: buttonWidth, height: buttonHeight }, this.props.style]}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

function configButtonStatesAnimation(buttonsStates, height) {
  const addedAnimtionConfigButtonStates = {};
  const stateNames = Object.keys(buttonsStates);
  for (let i = 0; i < stateNames.length; i++) {
    const stateName = stateNames[i];
    const buttonState = buttonsStates[stateName];
    const textAnimConfig = {};
    const imageAnimConfig = {};
    const progressAnimConfig = {};

    // config the text animations
    {
      const opacity = { inputRange: [], outputRange: [] };
      const translateY = { inputRange: [], outputRange: [] };
      if (i === 0) {
        opacity.inputRange.push(0, 1);
        opacity.outputRange.push(1, 0);
        translateY.inputRange.push(0, 1);
        translateY.outputRange.push(0, height - 10);
      } else {
        opacity.inputRange.push(0, 1);
        opacity.outputRange.push(0, 1);
        translateY.inputRange.push(0, 1);
        translateY.outputRange.push((0 - height * i), (0 - height * (i - 1)));
      }
      textAnimConfig.opacity = opacity;
      textAnimConfig.transform = [{ translateY }];
    }

    // config the image animations
    {
      const opacity = { inputRange: [], outputRange: [] };
      const translateY = { inputRange: [], outputRange: [] };
      if (i === 0) {
        opacity.inputRange.push(0, 1);
        opacity.outputRange.push(1, 0);
        translateY.inputRange.push(0, 1);
        translateY.outputRange.push(0, (height - 10) * 2);
      } else {
        opacity.inputRange.push(0, 1);
        opacity.outputRange.push(0, 1);
        translateY.inputRange.push(0, 1);
        translateY.outputRange.push((0 - (height * 2) * i), (0 - (height * 2) * (i - 1)));
      }
      imageAnimConfig.opacity = opacity;
      imageAnimConfig.transform = [{ translateY }];
    }

    // config the progress animations
    {
      const opacity = { inputRange: [], outputRange: [] };
      const translateY = { inputRange: [], outputRange: [] };
      opacity.inputRange.push(0, 1);
      opacity.outputRange.push(0, 1);
      translateY.inputRange.push(0, 0);
      translateY.outputRange.push((0 - (height * 2) * i), (0 - (height * 2) * (i - 1)));
      progressAnimConfig.opacity = opacity;
      progressAnimConfig.transform = [{ translateY }];
    }

    addedAnimtionConfigButtonStates[stateName] = {
      textAnimConfig,
      imageAnimConfig,
      progressAnimConfig,
      ...buttonState,
    };
  }

  return addedAnimtionConfigButtonStates;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    // paddingHorizontal: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: '#7F91A7',
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginRight: 12,
  },
  text: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white',
  },
  secondaryText: {
    letterSpacing: 1,
    fontSize: 12,
    color: '#7F91A7',
  },
});

export default ButtonComponent;
