//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Button
          title="Open Settings Modal"
          onPress={() => this.props.navigation.navigate('SettingsModal')}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

//make this component available to the app
export default Settings;
