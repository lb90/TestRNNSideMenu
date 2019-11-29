'use strict';

import React, { Component } from 'react';
import {
  View,
  Switch,
  StyleSheet,
} from 'react-native';

export default class SideComponent extends Component {
  state = {
    isSwitchOn: false,
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Switch value={this.state.isSwitchOn}
                onValueChange={ () => { this.setState({ isSwitchOn: !this.state.isSwitchOn }); } } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
