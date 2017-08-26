import React, { PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ButtonComponent from 'react-native-button-component';

export default function ButtonExplorer(props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>
          {'React Native Button Component'.toUpperCase()}
        </Text>

        <ButtonComponent
          style={styles.buttonStyle}
          text="One State Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'One State Buttons',
              name: 'oneStateButtons',
            });
          }}
        />

        <ButtonComponent
          style={styles.buttonStyle}
          text="Disabled Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'Disabled Buttons',
              name: 'disabledButtons',
            });
          }}
        />

        <ButtonComponent
          style={styles.buttonStyle}
          text="Multiple States Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'Multiple States Buttons',
              name: 'multipleStatesButtons',
            });
          }}
        />

        <ButtonComponent
          style={styles.buttonStyle}
          text="Progress Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'Progress Buttons',
              name: 'progressButtons',
            });
          }}
        />

        <ButtonComponent
          style={styles.buttonStyle}
          text="Spinner Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'Spinner Buttons',
              name: 'spinnerButtons',
            });
          }}
        />

        <ButtonComponent
          style={styles.buttonStyle}
          text="Circle Buttons"
          onPress={() => {
            props.navigator.push({
              title: 'Circle Buttons',
              name: 'circleButtons',
            });
          }}
        />
      </View>
    </ScrollView>
  );
}

ButtonExplorer.propTypes = {
  navigator: PropTypes.object,
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: 100,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    marginBottom: 40,
  },
  buttonStyle: {
    marginBottom: 20,
  },
});
