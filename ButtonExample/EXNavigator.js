import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import ButtonExplorer from './src/ButtonExplorer';
import OneStateButtons from './src/containers/OneStateButtons';
import DisabledButtons from './src/containers/DisabledButtons';
import MultipleStatesButtons from './src/containers/MultipleStatesButtons';
import ProgressButtons from './src/containers/ProgressButtons';
import SpinnerButtons from './src/containers/SpinnerButtons';
import CircleButtons from './src/containers/CircleButtons';

export default class EXNavigator extends Component {
  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    if (route.name === 'oneStateButtons') {
      return <OneStateButtons navigator={navigator} />;
    }
    if (route.name === 'disabledButtons') {
      return <DisabledButtons navigator={navigator} />;
    }
    if (route.name === 'multipleStatesButtons') {
      return <MultipleStatesButtons navigator={navigator} />;
    }
    if (route.name === 'progressButtons') {
      return <ProgressButtons navigator={navigator} />;
    }
    if (route.name === 'spinnerButtons') {
      return <SpinnerButtons navigator={navigator} />;
    }
    if (route.name === 'circleButtons') {
      return <CircleButtons navigator={navigator} />;
    }

    return <ButtonExplorer navigator={navigator} />;
  }

  render() {
    const navigationBar = (
      <Navigator.NavigationBar
        style={styles.navigationBar}
        routeMapper={{
          LeftButton: (route, navigator, index) => {
            if (index === 0) return null;
            return (
              <TouchableOpacity
                style={[styles.navigationButton, styles.navigationLeftButton]}
                onPress={() => navigator.pop()}
              >
                <Text>
                  Back
                </Text>
              </TouchableOpacity>
            );
          },
          RightButton: () => null,
          Title: route => (
            <Text style={styles.navigationTitle}>
              {route.title}
            </Text>
          ),
        }}
      />
    );

    return (
      <Navigator
        initialRoute={{
          name: 'index',
          title: 'Button Explorer',
        }}
        navigationBar={navigationBar}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
        style={styles.navigator}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
