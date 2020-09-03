import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Superman extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>I am the SUPERMAN</Text>
            </View>
          );
        }
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});