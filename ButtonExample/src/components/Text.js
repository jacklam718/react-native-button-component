import React from 'react';
import ReactNative, { StyleSheet, Dimensions } from 'react-native';

const scale = Dimensions.get('window').width / 375;

export default function Heading1(props) {
  return (
    <ReactNative.Text style={styles.h1} {...props} />
  );
}

function normalize(size: number): number {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  h1: {
    fontSize: normalize(18),
    lineHeight: normalize(27),
    color: '#555454',
    fontWeight: 'bold',
  },
});
