import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Carousel } from 'teaset'
import Util from '../../utils/util'
import TaskList from '../../components/taskList'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true}></StatusBar>
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
        <TaskList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    backgroundColor: '#fff'
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
