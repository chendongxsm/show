import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import Util from '../../utils/util'
import TaskList from '../../components/taskList'
import {NavigationBar} from 'teaset'



export default class Task extends Component {
  constructor(props) {
		super(props);
	}
    
  static navigationOptions = {
      tabBarLabel: '任务大厅',
      tabBarIcon: ({ focused, tintColor }) => (
          <Image
              source={focused ? require('../../images/icon-task-b.png') : require('../../images/icon-task.png')}
              style={{ width: 25, height: 20, tintColor: tintColor }}
          />
      )
  };
  render() {
    let arr = [{
      id: 1,
      image: 'https://img.alicdn.com/bao/uploaded/i3/2937106014/TB2b8_Yab1J.eBjSspnXXbUeXXa_!!2937106014.jpg',
      title: '苏珊格子衬衣',
      advance: 199,
      brokerage: 25,
      total: 3,
      enroll: 1,
      platform: '淘宝',
      type: '详情页'
    },{
      id: 2,
      image: 'https://img.alicdn.com/bao/uploaded/i2/2097385502/TB2vmEOy41YBuNjy1zcXXbNcXXa_!!2097385502-0-item_pic.jpg_320x320.jpg',
      title: '南极人枕头',
      advance: 299,
      brokerage: 55,
      total: 10,
      enroll: 2,
      platform: '天猫',
      type: '详情页'
    },{
      id: 3,
      image: 'https://img.alicdn.com/bao/uploaded/i2/2097385502/TB2vmEOy41YBuNjy1zcXXbNcXXa_!!2097385502-0-item_pic.jpg_320x320.jpg',
      title: '南极人枕头',
      advance: 299,
      brokerage: 55,
      total: 10,
      enroll: 2,
      platform: '天猫',
      type: '详情页'
    },{
      id: 4,
      image: 'https://img.alicdn.com/bao/uploaded/i2/2097385502/TB2vmEOy41YBuNjy1zcXXbNcXXa_!!2097385502-0-item_pic.jpg_320x320.jpg',
      title: '南极人枕头',
      advance: 299,
      brokerage: 55,
      total: 10,
      enroll: 2,
      platform: '天猫',
      type: '详情页'
    },{
      id: 5,
      image: 'https://img.alicdn.com/bao/uploaded/i2/2097385502/TB2vmEOy41YBuNjy1zcXXbNcXXa_!!2097385502-0-item_pic.jpg_320x320.jpg',
      title: '南极人枕头',
      advance: 299,
      brokerage: 55,
      total: 10,
      enroll: 2,
      platform: '天猫',
      type: '详情页'
    }]
    return (
        
      <View style={styles.container}>
        {/* <NavigationBar title='Teaset' leftView={<NavigationBar.BackButton title='Back' />} /> */}
        {/* <Text>213123</Text> */}
        <TaskList list={arr}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    backgroundColor: '#fff',
  },
});
