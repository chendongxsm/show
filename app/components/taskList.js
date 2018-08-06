import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';


export default class TaskList extends Component {
  _keyExtractor = (item, index) => item.id.toString()
  render() {
    return (
      <FlatList data={this.props.list} keyExtractor={this._keyExtractor}
        renderItem={({item}) => <View style={styles.itemWrap}>
        <Image style={styles.itemImg} source={{uri: item.image}} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDetail}>垫付：{item.advance}金币</Text>
          <Text style={styles.itemDetail}>类型：{item.type}</Text>
          <View style={styles.bottomWrap}>
            <View>
              <View style={styles.itemProgressWrap}>
                <Text style={styles.itemProgerssText}>名额{item.enroll}/{item.total}</Text>
                <View style={[styles.itemProgressBox, {width: item.enroll/item.total*100}]}></View>
              </View>
            </View>
            <Text>佣金：<Text>{item.brokerage}</Text>金币</Text>
          </View>  
        </View>
      </View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#eee'
  },
  itemImg: {
    flex: 0,
    width: 80,
    height: 80
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10
  },
  itemTitle: {
    color: '#333'
  },
  itemDetail: {
    fontSize: 12,
    marginTop: 2
  },
  bottomWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemProgressWrap: {
    position: 'relative',
    width: 100,
    height: 10,
    backgroundColor: '#ffaeb9',
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemProgerssText: {
    color: '#fff',
    fontSize: 8,
    textAlign: 'center',
  },
  itemProgressBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 10,
    backgroundColor: '#f40009',
  }
});
