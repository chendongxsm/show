import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class App extends Component {

  render() {
    let arr = [{
      image: 'https://img.alicdn.com/bao/uploaded/i3/2937106014/TB2b8_Yab1J.eBjSspnXXbUeXXa_!!2937106014.jpg',
      title: '苏珊格子衬衣',
      advance: '199金币',
      brokerage: '25金币',
      total: 3,
      left: 2,
      platform: '淘宝'
    },{
      image: 'https://img.alicdn.com/bao/uploaded/i2/2097385502/TB2vmEOy41YBuNjy1zcXXbNcXXa_!!2097385502-0-item_pic.jpg_320x320.jpg',
      title: '南极人枕头',
      advance: '299金币',
      brokerage: '55金币',
      total: 10,
      left: 8,
      platform: '天猫'
    }]
    let list = arr.map(item=>
      <View style={styles.itemWrap}>
        <Image style={styles.itemImg} source={{uri: item.image}} />
        <View style={styles.itemInfo}>
          <Text>{item.title}</Text>
        </View>
      </View>
    )
    return (
      <View >
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImg: {
    width: 80,
    height: 80
  }
});
