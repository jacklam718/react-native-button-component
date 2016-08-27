import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import ButtonComponent from './src';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const Spacer = () => <View style={styles.spacer} />;

class ButtonComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
      buttonState: 'idle',
      buttonState2: 'idle',
      addState: 'add',
      upload: 'upload',
      state: 'idle',
      state2: 'idle',
    };

    this.toggleAdd = this.toggleAdd.bind(this);
    this.upload = this.upload.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
    this.idle = this.idle.bind(this);
    this.busy = this.busy.bind(this);
  }

  toggleAdd() {
    this.setState({ addState: this.state.addState === 'added' ? 'add' : 'added' });
  }

  upload() {
    this.setState({ upload: 'uploading' });
  }

  cancelUpload() {
    this.setState({ upload: 'upload' });
  }

  idle() {
    this.setState({ state: 'busy' });
  }

  busy() {
    this.setState({ state: 'idle' });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Spacer />

          <ButtonComponent
            // text={this.state.isAdded ? 'Added' : 'Add'}
            text={this.state.isAdded ? 'Added' : 'Add'}
            image={require('./src/img/add.png')}
            onPress={() => this.setState({ isAdded: !this.state.isAdded })}
          />

          <Spacer />

          <ButtonComponent
            states={{
              upload: {
                text: 'Upload',
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.upload,
              },
              uploading: {
                text: 'Uploading...',
                progress: true,
                progressFill: 40,
                onPress: this.cancelUpload,
              },
            }}
            buttonState={this.state.upload}
          />

          <Spacer />

          <ButtonComponent
            states={{
              upload: {
                text: 'Upload',
                image: require('./src/img/add.png'),
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.upload,
              },
              uploading: {
                text: 'Cancel Upload',
                onPress: this.cancelUpload,
              },
            }}
            buttonState={this.state.upload}
          />

          <Spacer />

          <ButtonComponent
            states={{
              add: {
                text: 'Add',
                image: require('./src/img/add.png'),
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.toggleAdd,
              },
              added: {
                text: 'Added',
                image: require('./src/img/added.png'),
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.toggleAdd,
              },
              upload: {
                Text: 'Cancel Upload',
                onPress: this.cancelUpload,
              },
            }}
            buttonState={this.state.addState}
          />

          <Spacer />

          <ButtonComponent
            states={{
              idle: {
                text: 'Idle',
                image: require('./src/img/add.png'),
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                backgroundColors: ['#005796', '#0571be'],
                text: 'Busy',
                spinner: true,
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            shape="rectangle"
            states={{
              idle: {
                text: 'Idle',
                image: require('./src/img/add.png'),
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                text: 'Busy',
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            shape="rectangle"
            states={{
              idle: {
                type: 'border',
                text: 'Idle',
                image: require('./src/img/add.png'),
                onPress: this.idle,
              },
              busy: {
                text: 'Busy',
                backgroundColors: ['#212122', '#414141'],
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            shape="rectangle"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#212122', '#414141'],
                onPress: this.idle,
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                backgroundColors: ['#212122', '#414141'],
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            shape="rectangle"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#212122', '#414141'],
                onPress: () => { this.setState({ state2: 'busy' }); },
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                backgroundColors: ['#212122', '#414141'],
                onPress: () => { this.setState({ state2: 'error' }); },
              },
              error: {
                text: 'Error!',
                spinner: true,
                backgroundColors: ['#ff4747', '#fb5454'],
                onPress: () => { this.setState({ state2: 'idle' }); },
              },
            }}
            buttonState={this.state.state2}
          />

          <Spacer />

          <ButtonComponent
            type="primary"
            states={{
              idle: {
                text: 'Idle State',
                onPress: () => {
                  this.setState({ buttonState: 'busy' });
                },
              },
              busy: {
                text: 'Busy State',
                onPress: () => {
                  this.setState({ buttonState: 'success' });
                },
              },
              success: {
                text: 'Success State',
                onPress: () => {
                  this.setState({ buttonState: 'error' });
                },
              },
              error: {
                text: 'Error State',
                onPress: () => {
                  this.setState({ buttonState: 'idle' });
                },
              },
            }}
            buttonState={this.state.buttonState}
          />

          <Spacer />

          <ButtonComponent
            type="border"
            shape="rectangle"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                spinnerColor: '#00baff',
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            type="border"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                // text: 'Saving...',
                spinner: true,
                spinnerColor: '#00baff',
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            type="round"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                spinnerColor: '#00baff',
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            type="rectangle"
            states={{
              idle: {
                text: 'Save',
                backgroundColors: ['#6A6AD5', '#6F86D9'],
                onPress: this.idle,
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                spinnerColor: '#00baff',
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />

          <ButtonComponent
            shape="rectangle"
            states={{
              idle: {
                text: 'Save',
                gradientStart: [0.5, 1],
                gradientEnd: [1, 1],
                backgroundColors: ['#4DC7A4', '#66D37A'],
                onPress: this.idle,
              },
              busy: {
                text: 'Saving...',
                spinner: true,
                spinnerColor: '#00baff',
                gradientStart: [0.5, 1],
                gradientEnd: [1, 1],
                onPress: this.busy,
              },
            }}
            buttonState={this.state.state}
          />

          <Spacer />
          <Text>{this.state.buttonState}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('ButtonComponentExample', () => ButtonComponentExample);
