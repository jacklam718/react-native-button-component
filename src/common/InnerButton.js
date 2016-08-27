import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Spinner from 'react-native-spinkit';

const propTypes = {
  imageAnim: PropTypes.object,
  textAnim: PropTypes.object,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  progressAnim: PropTypes.object,
  progressStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  progressSize: PropTypes.number,
  progressWidth: PropTypes.number,
  progressTintColor: PropTypes.string,
  progressBackgroundColor: PropTypes.string,
  progressFill: PropTypes.number,
  progress: PropTypes.bool,
  spinnerAnim: PropTypes.object,
  spinner: PropTypes.bool,
  spinnerSize: PropTypes.number,
  spinnerType: PropTypes.string,
  spinnerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  spinnerColor: PropTypes.string,
  image: PropTypes.any,
  text: PropTypes.string,
};

const defaultProps = {
  progressSize: 30,
  progressWidth: 3,
  progressTintColor: '#00e0ff',
  progressBackgroundColor: '#3d5875',

  spinnerSize: 25,
  spinnerType: 'Wave',
  spinnerColor: '#ffffff',
};

class InnerButton extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    let image = null;
    let text = null;
    let spinner = null;
    let progress = null;
    let contentStyle = null;

    if (this.props.image && !this.props.progress && !this.props.spinner) {
      image = (
        <Animated.Image
          source={this.props.image}
          style={[styles.image, this.props.imageStyle, this.props.imageAnim]}
        />
      );
    }

    if (this.props.text) {
      text = (
        <Animated.Text style={[styles.text, this.props.textStyle, this.props.textAnim]}>
          <Text>{this.props.text}</Text>
        </Animated.Text>
      );
    }

    if (this.props.progress) {
      contentStyle = styles.progressContent;
      progress = (
        <Animated.View style={[styles.progress, this.props.progressStyle, this.props.imageAnim]}>
          <AnimatedCircularProgress
            size={this.props.progressSize}
            width={this.props.progressWidth}
            fill={this.props.progressFill}
            tintColor={this.props.progressTintColor}
            backgroundColor={this.props.progressBackgroundColor}
          />
        </Animated.View>
      );
    }

    if (this.props.spinner && !this.props.progress && !this.props.image) {
      contentStyle = styles.spinnerContent;
      spinner = (
        <Animated.View
          style={[styles.spinner, this.props.spinnerStyle, this.props.imageAnim]}
        >
          <Spinner
            isVisible
            style={[styles.spinner, this.props.spinnerStyle]}
            size={this.props.spinnerSize}
            type={this.props.spinnerType}
            color={this.props.spinnerColor}
          />
        </Animated.View>
      );
    }

    return (
      <View style={[styles.content, contentStyle]}>
        {image}
        {progress}
        {spinner}
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  progressContent: {
    flexDirection: 'column',
  },
  spinnerContent: {
    flexDirection: 'column',
  },
  progress: {
    alignItems: 'center',
  },
  image: {
    marginRight: 12,
  },
  spinner: {
  },
  text: {
    letterSpacing: 10,
    fontSize: 12,
    color: 'white',
  },
});

export default InnerButton;
