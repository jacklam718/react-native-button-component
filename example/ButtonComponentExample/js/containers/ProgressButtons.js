import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ButtonComponent from 'react-native-button-component';
import GroupContainer from '../components/GroupContainer';

export default class ProgressButtons extends Component {
  constructor(props) {
    super(props);

    this.upload = this.upload.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.uploadCompleted = this.uploadCompleted.bind(this);

    this.state = {
      buttonState: 'upload',
      progress: 0,
    };

    this.states = {
      upload: {
        text: 'Upload',
        onPress: this.upload,
      },
      uploading: {
        progress: true,
        progressFill: this.state.progress,
        text: 'Uploading',
        onPress: this.cancelUpload,
      },
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  upload() {
    this.setState({ buttonState: 'uploading', progress: 0 });

    this.intervalId = setInterval(() => {
      if (this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 1 });
      } else {
        clearInterval(this.intervalId);
        this.setState({ buttonState: 'completed' });
      }
    }, 20);
  }

  cancelUpload() {
    this.setState({ buttonState: 'upload' });
  }

  uploadCompleted() {
    this.setState({ buttonState: 'upload' });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GroupContainer
            groupTitle="Progress Button - Primary"
          >
            <ButtonComponent
              buttonState={this.state.buttonState}
              states={{
                upload: {
                  text: 'Upload'.toUpperCase(),
                  onPress: this.upload,
                },
                uploading: {
                  progress: true,
                  progressFill: this.state.progress,
                  text: 'Uploading...'.toUpperCase(),
                  onPress: this.cancelUpload,
                },
                completed: {
                  text: 'Upload Completed, Ok Got It 👍'.toUpperCase(),
                  onPress: this.uploadCompleted,
                },
              }}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Progress Button - Primary Reactagle"
          >
            <ButtonComponent
              shape="reactagle"
              buttonState={this.state.buttonState}
              states={{
                upload: {
                  text: 'Upload'.toUpperCase(),
                  onPress: this.upload,
                },
                uploading: {
                  progress: true,
                  progressFill: this.state.progress,
                  text: 'Uploading...'.toUpperCase(),
                  onPress: this.cancelUpload,
                },
                completed: {
                  text: 'Upload Completed, Ok Got It 👍'.toUpperCase(),
                  onPress: this.uploadCompleted,
                },
              }}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Progress Button - Secondary Border"
          >
            <ButtonComponent
              type="border"
              buttonState={this.state.buttonState}
              states={{
                upload: {
                  text: 'Upload'.toUpperCase(),
                  onPress: this.upload,
                },
                uploading: {
                  progress: true,
                  progressFill: this.state.progress,
                  text: 'Uploading...'.toUpperCase(),
                  onPress: this.cancelUpload,
                },
                completed: {
                  text: 'Upload Completed, Ok Got It 👍'.toUpperCase(),
                  onPress: this.uploadCompleted,
                },
              }}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Progress Button - Secondary"
          >
            <ButtonComponent
              type="secondary"
              buttonState={this.state.buttonState}
              states={{
                upload: {
                  text: 'Upload'.toUpperCase(),
                  onPress: this.upload,
                },
                uploading: {
                  progress: true,
                  progressFill: this.state.progress,
                  text: 'Uploading...'.toUpperCase(),
                  onPress: this.cancelUpload,
                },
                completed: {
                  text: 'Upload Completed, Ok Got It 👍'.toUpperCase(),
                  onPress: this.uploadCompleted,
                },
              }}
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
    marginTop: 64,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
