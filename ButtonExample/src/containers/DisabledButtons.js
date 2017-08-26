import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ButtonComponent from 'react-native-button-component';
import GroupContainer from '../components/GroupContainer';

export default class DisabledButtons extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GroupContainer
            groupTitle="Button"
          >
            <ButtonComponent
              disabled
              backgroundColors={['#212122', '#414141']}
              text={'Button'.toUpperCase()}
              onPress={() => {

              }}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Icon Button"
          >
            <ButtonComponent
              disabled
              image={require('../img/settings.png')}
              text={'Icon Buttons'.toUpperCase()}
              onPress={() => {

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
