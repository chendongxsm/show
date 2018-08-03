import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { Carousel } from 'teaset'
import Util from '../../utils/util'
import TaskList from '../../components/taskList'


type Props = {};
export default class App extends Component<Props> {
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
      <ScrollView style={styles.container}>
        {/* <StatusBar translucent={true}></StatusBar> */}
        <Carousel style={{ height: 150 }}>
          <Image style={{ width: 375, height: 150 }} source={{uri: 'https://img.alicdn.com/imgextra/i1/86/TB2K.llX1ZXBuNjt_dMXXXdmVXa_!!86-0-luban.jpg'}} />
          <Image style={{ width: 375, height: 150 }} source={{uri: 'https://img.alicdn.com/simba/img/TB1sDQ7z1ySBuNjy1zdSutPxFXa.jpg'}} />
          <Image style={{ width: 375, height: 150 }} source={{uri: 'https://img.alicdn.com/imgextra/i1/179/TB28urWlHwrBKNjSZPcXXXpapXa_!!179-0-luban.jpg'}} />
        </Carousel>
        <View style={styles.menuWrap}>
          <View style={styles.menu}>
            <Image style={styles.menuImg} source={require('../../images/taobao.png')} />
            <Text style={styles.menuText}>淘宝</Text>
          </View>
          <View style={styles.menu}>
            <Image style={styles.menuImg} source={require('../../images/tmall.png')} />
            <Text style={styles.menuText}>天猫</Text>
          </View>
          <View style={styles.menu}>
            <Image style={styles.menuImg} source={require('../../images/jd.png')} />
            <Text style={styles.menuText}>京东</Text>
          </View>
          <View style={styles.menu}>
            <Image style={styles.menuImg} source={require('../../images/pdd.png')} />
            <Text style={styles.menuText}>拼多多</Text>
          </View>
        </View>
        <TaskList list={arr}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    backgroundColor: '#fff',
  },
  menuWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  menu: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  menuImg: {
    width: 40,
    height: 40
  },
  menuText: {
    textAlign: 'center'
  }
});
