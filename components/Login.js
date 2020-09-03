import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../assets/favicon.png')}
                    />
                    <Text style={styles.slogan}>IOT Solution - Data Wizard</Text>
                </View>
                <View style={styles.loginInput} >
                    <Text>
                        
                    </Text>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  slogan: {
   marginTop: 10,
  },
  loginInput: {
    flex: 2,
  }, 
  
});