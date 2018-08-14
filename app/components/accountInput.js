import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableNativeFeedback} from 'react-native';
import {Toast} from 'teaset'
var timer = null


export default class TaskList extends Component {
  constructor(props){
    super(props)
    this.getCode = this.getCode.bind(this)
    this.state = {
      time: '获取验证码'
    }
  }
  render() {
    return (
        <View style={styles.groupWrap}>
          {this.props.items.map((item, index)=><View key={item.name} style={[styles.inputWrap , 
            {borderBottomWidth: index==this.props.items.length-1?1:0}]}>
            <View style={styles.iconWrap}>
              <Image style={styles.navArrow} source={item.icon} style={styles.icon}></Image>
            </View>
            <TextInput style={styles.input} 
            placeholder={item.placeholder} 
            
            secureTextEntry={item.password}
            placeholderTextColor='#fff' 
            underlineColorAndroid="transparent"/>
            {item.code && <TouchableNativeFeedback style={styles.code} onPress={()=>{this.getCode()}}>
              <Text style={styles.codeText}>{this.state.time}</Text>
            </TouchableNativeFeedback>}
            
          </View>)}
        </View>
    );
  }
  getCode(){
    let time = 60
    this.setState({
      time: time + 's'
    })
    timer = setInterval(()=>{
      if(time == 0){
        this.setState({
          time: '获取验证码'
        })
        clearInterval(timer)
      }else{
        time--
        this.setState({
          time: time + 's'
        })
      }
    }, 1000)
    Get('user/getCode', res=>{
      Toast.message(res.msg);
    })
  }
}

const styles = StyleSheet.create({
  groupWrap: {
    alignSelf: 'center',
    width: 500,
    marginTop: 250,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    borderColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    
  },
  iconWrap: {
    flex: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 30,
    color: '#fff'
  },
  code: {
    flex: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  codeText: {
    fontSize: 26,
    color: '#fff'
  }
});
