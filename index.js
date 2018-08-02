/** @format */
// #53a0f8

import React from 'react';
import {AppRegistry} from 'react-native';
import {TabView} from 'teaset';
import {name as appName} from './app.json';
import Index from './app/pages/index/index'
import Task from './app/pages/task/task'

class App extends React.Component{
  render(){
    return(
      <TabView style={{flex: 1}} type='projector'>
        <TabView.Sheet
          title='首页'
          icon={require('./app/images/icon-home.png')}
          activeIcon={require('./app/images/icon-home-b.png')}
        >
          <Index />
        </TabView.Sheet>
        <TabView.Sheet
          title='任务大厅'
          icon={require('./app/images/icon-task.png')}
          activeIcon={require('./app/images/icon-task-b.png')}
          badge={3}
        >
          <Task />
        </TabView.Sheet>
        <TabView.Sheet
          title='我的'
          icon={require('./app/images/icon-user.png')}
          activeIcon={require('./app/images/icon-user-b.png')}
          // badge={1}
        >
          <Index />
        </TabView.Sheet>
      </TabView>
    )
  }
}

AppRegistry.registerComponent(appName, () => App);
