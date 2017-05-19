import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

const Spacer = () => <View style={styles.spacer} />;

export default class ButtonComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: 'download',
      downloadProgress: 0,
    };

    this.download = this.download.bind(this);
    this.downloaded = this.downloaded.bind(this);
  }

  download() {
    this.setState({ download: 'downloading', downloadProgress: 0 });
    const intervalId = setInterval(() => {
      if (this.state.downloadProgress < 100) {
        this.setState({ downloadProgress: this.state.downloadProgress + 1 });
      } else {
        clearInterval(intervalId);
      }
    }, 50);
  }

  downloaded() {
    this.setState({ download: 'download' });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Spacer />

          <CircleButton
            shape="circle"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                text: 'Downloading',
                progressText: `${this.state.downloadProgress}%`,
                progress: true,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <CircleButton
            type="secondary"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                progressBackgroundColor: '#415974',
                text: 'Downloading',
                progressText: `${this.state.downloadProgress}%`,
                progress: true,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <RoundButton
            type="primary"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                progressBackgroundColor: '#F0F0F0',
                text: 'Downloading',
                progress: true,
                progressWidth: 2,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <RectangleButton
            type="primary"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                progressBackgroundColor: '#F0F0F0',
                text: 'Downloading',
                progress: true,
                progressWidth: 2,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />
          {/* <ButtonComponent
            shape="circle"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                progressBackgroundColor: '#F0F0F0',
                text: 'Downloading',
                progressText: this.state.downloadProgress + '%',
                progress: true,
                textInsideProgress: true,
                progressWidth: 3,
                progressSize: 100,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <ButtonComponent
            shape="circle"
            states={{
              download: {
                text: 'Download',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                progressBackgroundColor: '#F0F0F0',
                progressTintColor: '#5e5e5e',
                text: 'Downloading',
                progressText: this.state.downloadProgress + '%',
                progress: true,
                textInsideProgress: true,
                progressWidth: 3,
                progressSize: 100,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <ButtonComponent
            type="secondary"
            shape="circle"
            states={{
              download: {
                text: 'Upload',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                text: 'Downloading',
                progressText: this.state.downloadProgress + '%',
                progress: true,
                textInsideProgress: true,
                progressWidth: 2,
                progressSize: 100,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer />

          <ButtonComponent
            states={{
              download: {
                text: 'Upload',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.download,
              },
              downloading: {
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                text: 'Downloading',
                progress: true,
                progressWidth: 2,
                progressSize: 100,
                progressFill: this.state.downloadProgress,
                onPress: this.downloaded,
              },
            }}
            buttonState={this.state.download}
          />

          <Spacer /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spacer: {
    height: 20,
  },
  points: {
    backgroundColor: 'transparent',
    // position: 'absolute',
    top: 72,
    left: 56,
    width: 90,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: '100',
  },
});
