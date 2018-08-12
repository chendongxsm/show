import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableNativeFeedback, StatusBar } from 'react-native';
import {Button} from 'teaset'
import Util from '../../utils/util'
import NavGroup from '../../components/navGroup'




export default class Task extends Component {
  
  constructor(props) {
		super(props);
	}
    
  static navigationOptions = {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
          <Image
              source={focused ? require('../../images/icon-user-b.png') : require('../../images/icon-user.png')}
              style={{ width: 24, height: 24, tintColor: tintColor }}
          />
      )
  };
  render() {
    let orderArr = [{
      image: require('../../images/icon-1.png'),
      title: '已申请',
      type: 1 
    },{
      image: require('../../images/icon-2.png'),
      title: '待完成',
      type: 2 
    },{
      image: require('../../images/icon-3.png'),
      title: '待确认',
      type: 3 
    },{
      image: require('../../images/icon-4.png'),
      title: '已完成',
      type: 4 
    },{
      image: require('../../images/icon-5.png'),
      title: '待评价',
      type: 5 
    },]
    let navArr = [{
      icon: require('../../images/icon-6.png'),
      title: '会员认证',
      type: 'click',
      path: ''
    },{
      icon: require('../../images/icon-7.png'),
      title: '收货地址',
      type: 'click',
      path: ''
    },{
      icon: require('../../images/icon-8.png'),
      title: '商家入驻',
      type: 'click',
      path: ''
    },{
      icon: require('../../images/icon-9.png'),
      title: '邀请有礼',
      type: 'click',
      path: ''
    },{
      icon: require('../../images/icon-10.png'),
      title: '注销登录',
      type: 'click',
      path: ''
    }]
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor='#33a8de' translucent={false}/> */}
        <View style={styles.topWrap}>
          <Image style={styles.avatar} source={require('../../images/default-avatar.jpg')}></Image> 
          {/* <Text style={styles.username}>陈东xsm</Text> */}
          <Button title={<Text style={styles.loginText}>登录</Text>} style={styles.loginButton} onPress={() => this.props.navigation.push('Login')} />
          <TouchableNativeFeedback onPress={() => this.props.navigation.push('Setting')}>
            <Image style={styles.settingIcon} source={require('../../images/icon-setting.png')}></Image>
          </TouchableNativeFeedback>
          
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
        <View style={styles.orderNav}>
          <View style={styles.orderTitle}>
            <View style={styles.orderTitleLeft}>
              <Image style={styles.orderTitleLeftImg} source={require('../../images/icon-task-title.png')}></Image>
              <Text style={styles.orderTitleText}>我的任务</Text>
            </View>
            <View style={styles.orderTitleRight}>
              <Text style={styles.orderTitleText}>全部任务</Text>
              <Image style={styles.orderTitleRightImg} source={require('../../images/icon-arrow-right.png')}></Image>
              
            </View>
          </View>
          <View style={styles.orderList}>
            {orderArr.map(item=><View style={styles.orderWrap} key={item.title}>
              <Image style={styles.orderImg} source={item.image}></Image> 
              <Text style={styles.orderType}>{item.title}</Text>
            </View>)}
          </View>
        </View>
        <NavGroup groupArr={navArr}/>
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
    backgroundColor: '#33a8de',
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
    height: 70,
    backgroundColor: '#fff'
  },
  dataItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  orderNav: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff'
  },
  orderTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid',
  },
  orderTitleLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTitleLeftImg: {
    width: 12,
    height: 12,
    marginRight: 6
  },
  orderTitleRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTitleRightImg: {
    width: 12,
    height: 12
  },
  orderTitleText: {
    fontSize: 12
  },
  orderList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  orderWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  orderImg: {
    width: 22,
    height: 22
  },
  orderType: {
    marginTop: 4,
    fontSize: 12
  },
  loginButton: {
    marginTop: 15,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: '#33a8de',
    borderColor: '#fff',
    borderWidth: 0.8,
    borderRadius: 3
  },
  loginText: {
    fontSize: 13,
    color: '#fff',
  }
});
