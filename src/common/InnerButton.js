import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Spinner from 'react-native-spinkit';

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
  imageCenter: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  spinner: {
  },
  text: {
    letterSpacing: 10,
    fontSize: 12,
    flexDirection: 'row',
    color: 'white',
  },
  textInsideProgress: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const propTypes = {
  imageAnim: PropTypes.object,
  textAnim: PropTypes.object,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  progressAnim: PropTypes.object,
  progressStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  progressSize: PropTypes.number,
  progressWidth: PropTypes.number,
  progressTintColor: PropTypes.string,
  progressBackgroundColor: PropTypes.string,
  progressFill: PropTypes.number,
  progressText: PropTypes.string,
  textInsideProgress: PropTypes.bool,
  progress: PropTypes.bool,
  spinnerAnim: PropTypes.object,
  spinner: PropTypes.bool,
  spinnerSize: PropTypes.number,
  spinnerType: PropTypes.string,
  spinnerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
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
      const imageStyle = this.props.text ? styles.image : styles.imageCenter;
      image = (
        <Animated.Image
          source={this.props.image}
          style={[imageStyle, this.props.imageStyle, this.props.imageAnim]}
        />
      );
    }

    if ((this.props.text && !this.props.progress) || !this.props.textInsideProgress) {
      text = (
        <Animated.Text style={[styles.text, this.props.textStyle, this.props.textAnim]}>
          {this.props.text}
        </Animated.Text>
      );
    }

    if (this.props.progress) {
      contentStyle = styles.progressContent;
      let progressContent;

      if (this.props.textInsideProgress) {
        progressContent = [
          this.props.progressText && (
            <Animated.Text
              key="progressText"
              style={[styles.text, this.props.textStyle, this.props.textAnim]}
            >
              {this.props.progressText}
            </Animated.Text>
          ),
          this.props.text && (
            <Animated.Text
              key="text"
              style={[styles.text, this.props.textStyle, this.props.textAnim]}
            >
              {this.props.text}
            </Animated.Text>
          ),
        ];
      }

      const progressAnim = this.props.textInsideProgress
        ? this.props.progressAnim
        : this.props.imageAnim;
      progress = (
        <Animated.View style={[styles.progress, this.props.progressStyle, progressAnim]}>
          <AnimatedCircularProgress
            size={this.props.progressSize}
            width={this.props.progressWidth}
            fill={this.props.progressFill}
            tintColor={this.props.progressTintColor}
            backgroundColor={this.props.progressBackgroundColor}
          >
            {progressContent}
          </AnimatedCircularProgress>
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

export default InnerButton;
