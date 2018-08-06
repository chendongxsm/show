import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class TaskList extends Component {
  render() {
    return (
        
      <View style={styles.wrap}>
        {this.props.groupArr.map(item=><View style={styles.navWrap} key={item.title}>
          <View style={styles.navLeft}>
            <Image style={styles.navIcon} source={item.icon}></Image>
            <Text style={styles.navText}>{item.title}</Text>
          </View>
          <View style={styles.navRight}>
            <Text style={styles.navText}>{item.detail}</Text>
            <Image style={styles.navArrow} source={require('../images/icon-arrow-right.png')}></Image>
          </View>
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  navWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid',
    
  },
  navLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    width: 16,
    height: 16,
    marginRight: 10
  },
  navText: {
    fontSize: 12
  },
  navArrow: {
    width: 16,
    height: 16,
    marginRight: 5
  }
});
