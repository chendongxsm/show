import React, { Component } from 'react';
import {StyleSheet, Text, View, StatusBar,TouchableNativeFeedback, ImageBackground,PixelRatio,Dimensions } from 'react-native';
import {Button} from 'teaset'
import AccountInput from '../../components/accountInput'

import {width, height, scale} from '../../utils/util'



export default class Task extends Component{
  constructor(props) {
    super(props);
	}
  
  render() {
    let arr = [{
      icon: require('../../images/icon-login-username.png'),
      name: 'tel',
      placeholder: '请输入手机号',
      type: 'numeric',
    },{
      icon: require('../../images/icon-login-password.png'),
      name: 'password',
      placeholder: '请输入密码',
      type: 'phone-pad',
      password: true,
    }]
    return (
      <View style={styles.container}>
        {/* <StatusBar translucent={true}/> */}
        <ImageBackground source={require('../../images/login-bg-img.png')} style={styles.bgImg}>
          <AccountInput items={arr}/>
          <Button title={<Text style={styles.loginText}>登录</Text>} onPress={() => Log(Transform[0])} style={styles.loginButton}/>
          <View style={styles.jumpWrap}>
            <TouchableNativeFeedback  onPress={()=>this.props.navigation.push('Register')}>
              <Text style={styles.jumpText}>注册账号</Text>
            </TouchableNativeFeedback>
            
            <Text style={styles.jumpText}>忘记密码</Text>
          </View>
        </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    transform: [{translateX: -width * .5}, {translateY: -height * .5}, {scale: scale}, {translateX: width * .5}, {translateY: height * .5}]
  },
  bgImg: {
    width: 750, 
    height: 1336
  },
  loginButton: {
    alignSelf: 'center',
    width: 500,
    height: 80,
    marginTop: 70,
    backgroundColor: '#33a8de'
  },
  loginText: {
    fontSize: 30,
    color: '#fff',
  },
  jumpWrap: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 500,
    marginTop: 20
  },
  jumpText: {
    marginLeft: 20,
    fontSize: 28,
    color: '#fff',
  }
});
