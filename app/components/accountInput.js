import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';


export default class TaskList extends Component {
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
            <View style={styles.code}><Text style={styles.codeText}>{item.code}</Text></View>
          </View>)}
        </View>
    );
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
