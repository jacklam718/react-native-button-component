import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import _ from 'lodash';
import InnerButton from './InnerButton';

const propTypes = {
  ...InnerButton.propTypes,
  states: PropTypes.object,
  buttonState: PropTypes.string,
};

class Button extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    const initValue = props.states ? Object.keys(props.states).indexOf(props.buttonState) : 0;
    this.state = {
      animated: new Animated.Value(initValue),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.states && this.props.buttonState !== nextProps.buttonState) {
      const toValue = Object.keys(this.props.states).indexOf(nextProps.buttonState);
      Animated.spring(this.state.animated, { toValue }).start();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { states, buttonState } = nextProps;
    if (states) {
      return !!states[buttonState].progress;
    }
    return true;
  }

  createAnimation({ opacity, transform }) {
    const animation = {};

    if (opacity) {
      animation.opacity = this.state.animated.interpolate(opacity);
    }
    if (transform) {
      animation.transform = _.map(transform, (directives) => {
        const interpolates = {};
        _.forEach(directives, (directive, directiveName) => {
          interpolates[directiveName] = this.state.animated.interpolate(directive);
        });
        return interpolates;
      });
    }

    return animation;
  }

  renderContent() {
    let content;
    // create inner buttons for each button states
    if (this.props.states) {
      content = _.map(this.props.states, (buttonState, buttonStateName) => {
        const { imageAnimConfig, textAnimConfig, progressAnimConfig } = buttonState;
        const imageAnim = imageAnimConfig ? this.createAnimation(imageAnimConfig) : null;
        const textAnim = textAnimConfig ? this.createAnimation(textAnimConfig) : null;
        const progressAnim = progressAnimConfig ? this.createAnimation(progressAnimConfig) : null;

        return (
          <InnerButton
            key={buttonStateName}
            imageAnim={imageAnim}
            progressAnim={progressAnim}
            textAnim={textAnim}
            {...this.props}
            {...buttonState}
          />
        );
      });
    } else {
      // create one inner button for single button state
      content = (
        <InnerButton {...this.props} />
      );
    }

    return content;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

export default Button;
