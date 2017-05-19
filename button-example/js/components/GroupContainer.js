import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Heading1 from './Text';

export default function GroupContainer(props) {
  return (
    <View style={styles.container}>
      <Heading1>
        {props.groupTitle}
      </Heading1>
      <View style={styles.spacer} />
      {props.children}
    </View>
  );
}

GroupContainer.propTypes = {
  children: PropTypes.any,
  groupTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  spacer: {
    marginBottom: 5,
  },
});
