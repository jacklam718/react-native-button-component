import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ButtonComponent from 'react-native-button-component';
import GroupContainer from '../components/GroupContainer';

export default class ProgressButtons extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.login2 = this.login2.bind(this);

    this.state = {
      buttonState: 'login',
      buttonState2: 'login',
      progress: 0,
    };

    this.states = {
      login: {
        text: 'Login'.toUpperCase(),
        onPress: this.login,
      },
      onLogin: {
        spinner: true,
        text: 'Login...'.toUpperCase(),
      },
    };

    this.states2 = {
      login: {
        text: 'Login'.toUpperCase(),
        onPress: this.login2,
      },
      onLogin: {
        spinner: true,
        text: 'Login...'.toUpperCase(),
      },
      success: {
        text: 'Login Success 👍'.toUpperCase(),
      },
    };

    this.states3 = {
      login: {
        text: 'Login'.toUpperCase(),
        onPress: this.login2,
      },
      onLogin: {
        spinner: true,
        spinnerColor: '#000000',
        text: 'Login...'.toUpperCase(),
      },
      success: {
        text: 'Login Success 👍'.toUpperCase(),
      },
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  login() {
    this.setState({ buttonState: 'onLogin' });
    setTimeout(() => {
      this.setState({ buttonState: 'login' });
    }, 3000);
  }

  login2() {
    this.setState({ buttonState2: 'onLogin' });
    setTimeout(() => {
      this.setState({ buttonState2: 'success' });

      setTimeout(() => {
        this.setState({ buttonState2: 'login' });
      }, 1000);
    }, 3000);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GroupContainer
            groupTitle="Spinner Button"
          >
            <ButtonComponent
              buttonState={this.state.buttonState}
              states={this.states}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Spinner Button"
          >
            <ButtonComponent
              buttonState={this.state.buttonState2}
              states={this.states2}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Spinner Button"
          >
            <ButtonComponent
              shape="rectangle"
              buttonState={this.state.buttonState2}
              states={this.states2}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Spinner Button - Secondary Border"
          >
            <ButtonComponent
              type="border"
              buttonState={this.state.buttonState2}
              states={this.states3}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Spinner Button - Secondary Border Reactagle"
          >
            <ButtonComponent
              type="border"
              shape="rectangle"

              buttonState={this.state.buttonState2}
              states={this.states3}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Spinner Button - Secondary"
          >
            <ButtonComponent
              type="secondary"
              buttonState={this.state.buttonState2}
              states={this.states3}
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
