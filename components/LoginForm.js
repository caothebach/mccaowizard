import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
              <TextInput 
                placeholder="Username"
                style={styles.logininput}
              />
              <TextInput 
                placeholder="Password"
                style={styles.logininput}
              />
              <TouchableOpacity style={styles.buttoncontainer}>
                  <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
            </View>
          );
        }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logininput: {
    height: 40,
    backgroundColor: '#cdcdcd',
    paddingLeft: 10,
    marginBottom: 15,
  },
  buttoncontainer: {
    paddingVertical: 15,
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  buttontext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',

  },
});