import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { RoundButton } from '../src';

describe('Circle Button', () => {
  it('renders RoundButton correctly with one state', () => {
    const tree = renderer.create(
      <RoundButton
        text="Circle Button"
        onPress={() => {
        }}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders RoundButton correctly with multi states', () => {
    const tree = renderer.create(
      <RoundButton
        states={{
          state1: {
            text: 'State 1',
            backgroundColors: ['#4DC7A4', '#66D37A'],
            onPress: () => {},
          },
          state2: {
            backgroundColors: ['#6A6AD5', '#6F86D9'],
            text: 'State 2',
            onPress: () => {},
          },
        }}
        buttonState={'state1'}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
