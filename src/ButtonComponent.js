import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './common/Button';
import configButtonStatesAnimation from './configButtonStatesAnimation';

const propTypes = {
  ...Button.propTypes,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  shape: PropTypes.string,
  gradientStart: PropTypes.object,
  gradientEnd: PropTypes.object,
  gradientLocations: PropTypes.array,
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
  gradientStart: { x: 0.5, y: 1 },
  gradientEnd: { x: 1, y: 1 },
  width: null,
  height: 50,
  gradientLocations: null,
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

  getProp(propName) {
    const currentButtonState = (this.props.buttonState && this.props.states)
      ? this.props.states[this.props.buttonState]
      : this.props;
    const prop = currentButtonState[propName]
      ? currentButtonState[propName]
      : this.props[propName];

    return prop;
  }

  render() {
    let content;
    let shape;

    const onPress = this.getProp('onPress');
    const buttonStyle = this.getProp('buttonStyle');
    const gradientStart = this.getProp('gradientStart');
    const gradientEnd = this.getProp('gradientEnd');
    const gradientLocations = this.getProp('gradientLocations');
    const backgroundColors = this.getProp('backgroundColors');
    const type = this.getProp('type');
    const buttonHeight = this.getProp('buttonHeight');
    const buttonWidth = this.getProp('buttonWidth');

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
          locations={gradientLocations}
          style={[styles.button, shape, buttonStyle]}
        >
          {this.renderButton({ textStyle: styles.text })}
        </LinearGradient>
      );
    } else {
      const border = type === 'border' && styles.border;
      content = (
        <View style={[styles.button, border, shape, buttonStyle]}>
          {this.renderButton({ textStyle: styles.secondaryText })}
        </View>
      );
    }

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={onPress}
        activeOpacity={0.9}
        style={[styles.container, { width: buttonWidth, height: buttonHeight }, this.props.style]}
      >
        {content}
      </TouchableOpacity>
    );
  }
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
