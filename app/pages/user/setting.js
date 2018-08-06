import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationBar} from 'teaset'
import NavGroup from '../../components/navGroup'

export default class Task extends Component{

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
        <NavigationBar title='Teaset' leftView={<NavigationBar.BackButton title='Back' />} />
        <NavGroup groupArr={navArr}/>
      </View>
      
    );
  }
}