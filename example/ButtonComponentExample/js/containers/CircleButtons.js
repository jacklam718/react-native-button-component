import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import GroupContainer from '../components/GroupContainer';

export default class OneStateButtons extends Component {
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
        const downloadProgress = this.state.downloadProgress + 1;
        this.setState({ downloadProgress });
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
          <GroupContainer >
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
          </GroupContainer>

          <GroupContainer >
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
          </GroupContainer>

          <GroupContainer >
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
          </GroupContainer>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: 100,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
