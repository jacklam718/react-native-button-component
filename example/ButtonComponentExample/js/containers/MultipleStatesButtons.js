import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ButtonComponent from 'react-native-button-component';
import GroupContainer from '../components/GroupContainer';
import Icons from '../components/Icons';

export default class MultipleStatesButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeButton: 'like',
    };

    this.toggleLike = this.toggleLike.bind(this);

    const like = 'Like'.toUpperCase();
    const liked = 'Liked'.toUpperCase();

    this.statesForPrimary = {
      like: {
        text: like,
        onPress: this.toggleLike,
      },
      liked: {
        backgroundColors: ['#204E74', '#356287'],
        image: { uri: Icons.like.uri },
        imageStyle: styles.imageStyle,
        text: like,
        onPress: this.toggleLike,
      },
    };

    this.statesForSecondary = {
      like: {
        text: like,
        onPress: this.toggleLike,
      },
      liked: {
        backgroundColors: ['#204E74', '#356287'],
        image: { uri: Icons.likeBlack.uri },
        imageStyle: styles.imageStyle,
        text: liked,
        onPress: this.toggleLike,
      },
    };
  }

  toggleLike() {
    this.setState({ likeButton: this.state.likeButton === 'like' ? 'liked' : 'like' });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GroupContainer
            groupTitle="Primary - Round Button"
          >
            <ButtonComponent
              buttonState={this.state.likeButton}
              states={this.statesForPrimary}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Primary - Renctangle Button"
          >
            <ButtonComponent
              shape="renctangle"
              buttonState={this.state.likeButton}
              states={this.statesForPrimary}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Secondary + Border - Round Button"
          >
            <ButtonComponent
              type="border"
              backgroundColors={['#4E547A', '#5a6082']}
              buttonState={this.state.likeButton}
              states={this.statesForSecondary}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="Secondary + Border - Renctangle Button"
          >
            <ButtonComponent
              type="border"
              shape="renctangle"
              backgroundColors={['#4E547A', '#5a6082']}
              buttonState={this.state.likeButton}
              states={this.statesForSecondary}
            />
          </GroupContainer>

          <GroupContainer
            groupTitle="No Border - Round Button"
          >
            <ButtonComponent
              type="secondary"
              backgroundColors={['#4E547A', '#5a6082']}
              buttonState={this.state.likeButton}
              states={this.statesForSecondary}
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
  imageStyle: {
    width: 16,
    height: 16,
  },
});
