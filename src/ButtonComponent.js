import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './common/Button';

const propTypes = {
  ...Button.propTypes,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  shape: PropTypes.string,
  gradientStart: PropTypes.object,
  gradientEnd: PropTypes.object,
  gradientLocation: PropTypes.array,
  disabledGradientStart: PropTypes.object,
  disabledGradientEnd: PropTypes.object,
  disabledOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  backgroundColors: PropTypes.array,
  buttonStyle: PropTypes.any,
  style: PropTypes.any,
  progressSize: PropTypes.number,
  onPress: PropTypes.func,

};

const defaultProps = {
  type: 'primary',
  shape: 'round',
  backgroundColors: ['#4DC7A4', '#66D37A'],
  gradientStart: { x: 0.5, y: 1 },
  gradientEnd: { x: 1, y: 1 },
  gradientLocation: null,
  disabledGradientStart: { x: 0, y: 0 },
  disabledGradientEnd: { x: 0, y: 0 },
  disabledOpacity: 0.5,
  disabled: false,
  width: null,
  height: 50,
};

class ButtonComponent extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      currentButton: this.getCurrentButton(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.buttonState !== nextProps.buttonState) {
      this.setState({
        currentButton: this.getCurrentButton(nextProps),
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.image !== nextProps.image) return true;
    if (this.props.text !== nextProps.text) return true;
    if (this.props.disabled !== nextProps.disabled) return true;
    if (this.props.states && this.props.buttonState !== nextProps.buttonState) return true;
    if (this.props.states && this.props.states[this.props.buttonState].progressFill) return true;
    if (
      this.props.states &&
      this.props.states[this.props.buttonState].disabled !== nextProps.states[nextProps.buttonState].disabled
    ) return true;
    return false;
  }

  getCurrentButton(props) {
    return (props.buttonState && props.states)
      ? props.states[props.buttonState]
      : props;
  }

  getProp(propKey) {
    const { currentButton } = this.state;
    return currentButton[propKey] || this.props[propKey];
  }

  renderButton({ textStyle = styles.text, imageStyle = styles.image }) {
    let button;

    if (this.props.states) {
      const addedAnimtionConfigButtonStates = configButtonStatesAnimation(
        this.props.states,
        this.props.height,
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
    const style = this.getProp('style');
    const gradientStart = this.getProp('gradientStart');
    const gradientEnd = this.getProp('gradientEnd');
    const disabledGradientStart = this.getProp('disabledGradientStart');
    const disabledGradientEnd = this.getProp('disabledGradientEnd');
    const disabledOpacity = this.getProp('disabledOpacity');
    const disabled = this.getProp('disabled');
    const backgroundColors = this.getProp('backgroundColors');
    const type = this.getProp('type');
    const buttonHeight = this.getProp('height');
    const buttonWidth = this.getProp('width');
    const buttonStyle = this.getProp('buttonStyle');
    const shape = this.getProp('shape');
    const onPress = this.getProp('onPress');
    const disabledStyle = disabled
      ? { opacity: disabledOpacity }
      : null;

    let shapeStyle;
    if (['round', 'circle'].includes(shape)) {
      shapeStyle = {
        borderRadius: buttonHeight / 2,
      };
    }

    let content;
    if (type === 'primary') {
      content = (
        <LinearGradient
          start={disabled ? disabledGradientStart : gradientStart}
          end={disabled ? disabledGradientEnd : gradientEnd}
          colors={backgroundColors}
          collapsable={false}
          style={[styles.button, shapeStyle, buttonStyle, disabledStyle]}
        >
          {this.renderButton({ textStyle: styles.text })}
        </LinearGradient>
      );
    } else {
      const border = type === 'border' && styles.border;
      content = (
        <View style={[styles.button, border, shapeStyle, buttonStyle, disabledStyle]}>
          {this.renderButton({ textStyle: styles.secondaryText })}
        </View>
      );
    }

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.9}
        style={[
          styles.container,
          {
            width: buttonWidth,
            height: buttonHeight,
          },
          style,
        ]}
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
