'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet,
} from 'react-native';

export default class CenterComponent extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchable}
                            onPress={() => {Alert.alert('Button pressed')}}>
          <Text>Press</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
