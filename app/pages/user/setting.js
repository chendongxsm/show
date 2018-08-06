import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import {NavigationBar, ActionSheet} from 'teaset'
import NavGroup from '../../components/navGroup'

export default class Task extends Component{
  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this)
	}
  openActionSheet(){
    let items = [
      {title: '拍照', onPress: () => this.shoot},
      {title: '从相册选择图片', onPress: () => alert('Hello')},
    ];
    let cancelItem = {title: '取消'};
    ActionSheet.show(items, cancelItem);
  }
  shoot(){
    alert('Hello1')
  }
  render() {
    let navArr = [{
      title: '用户昵称',
      detail: '陈东xsm',
      path: '',
      type: 'view'
    },
    {
      title: '更改手机号',
      detail: '13071249530',
      path: '',
      type: 'view'
    },
    {
      title: '登录密码',
      detail: '去修改',
      path: '',
      type: 'view'
    },]
    return (
      <View>
        {/* <NavigationBar title='Teaset' leftView={<NavigationBar.BackButton title='Back' />} /> */}
        
        <View style={styles.avatarWrap}>
          <View style={styles.avatarLeft}>
            <Text style={styles.avatarText}>头像</Text>
          </View>
          <TouchableNativeFeedback style={styles.avatarRight} onPress={this.openActionSheet}>
            <Image style={styles.avatar} source={require('../../images/default-avatar.jpg')}></Image>
          </TouchableNativeFeedback>
        </View>
        
        <NavGroup groupArr={navArr}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  avatarWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid',
  },
  avatarText: {
    fontSize: 12
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 20
  }
});
