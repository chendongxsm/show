import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Task extends Component{
  constructor(props) {
    super(props);
	}
  
  render() {
    
    return (
      <View>
        <ImageBackground source={require('../../images/login-bg-img.png')} style={styles.bgImg}>
          
        </ImageBackground>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  bgImg: {
    width: '100%', 
    height: '100%'
  }
});
