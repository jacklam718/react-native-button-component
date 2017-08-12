import 'react-native';
import React from 'react';
import ButtonComponent from '../src';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ButtonComponent
      text="Icon Buttons"
      onPress={() => {
      }}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
