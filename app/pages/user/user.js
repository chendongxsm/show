import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import Util from '../../utils/util'
import { NavigationBar } from 'teaset'



export default class Task extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.topWrap}>
          <Image style={styles.avatar} source={require('../../images/default-avatar.jpg')}></Image> 
          <Text style={styles.username}>陈东xsm</Text>
          <Image style={styles.settingIcon} source={require('../../images/icon-setting.png')}></Image>
        </View>
        <View style={styles.dataWrap}>
          <View style={styles.dataItem}>
            <Text style={styles.dataNumber}>300</Text>
            <Text style={styles.dataTitle}>我的金币</Text>
          </View>
          <View style={[styles.dataItem, {borderLeftWidth: 1, borderLeftColor: '#eee', borderStyle: 'solid'}]}>
            <Text style={styles.dataNumber}>300</Text>
            <Text style={styles.dataTitle}>我的积分</Text>
          </View>
        </View>
        <View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    backgroundColor: '#f1f1f1',
  },
  topWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#5ba4f7',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  username: {
    marginTop: 4,
    color: '#fff'
  },
  settingIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: 26,
    height: 26
  },
  dataWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80
  },
  dataItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  }
});
