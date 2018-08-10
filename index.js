/** @format */
// #53a0f8

import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import {TabView, TeaNavigator} from 'teaset';
import {name as appName} from './app.json';
import Index from './app/pages/index/index'
import Task from './app/pages/task/task'
import User from './app/pages/user/user'
import Setting from './app/pages/user/setting'
import Login from './app/pages/user/login'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// class App extends React.Component{
//   render(){
//     return(
//       <TeaNavigator rootView={<TabView style={{flex: 1}} type='projector'>
//       <TabView.Sheet
//         title='首页'
//         icon={require('./app/images/icon-home.png')}
//         activeIcon={require('./app/images/icon-home-b.png')}
//       >
//         <Index />
//       </TabView.Sheet>
//       <TabView.Sheet
//         title='任务大厅'
//         icon={require('./app/images/icon-task.png')}
//         activeIcon={require('./app/images/icon-task-b.png')}
//         badge={3}
//       >
//         <Task />
//       </TabView.Sheet>
//       <TabView.Sheet
//         title='我的'
//         icon={require('./app/images/icon-user.png')}
//         activeIcon={require('./app/images/icon-user-b.png')}
//         // badge={1}
//       >
//         <User />
//       </TabView.Sheet>
//     </TabView>} />
      
//     )
//   }
// }

const MainScreenNavigator = createBottomTabNavigator(
	{
		Index: {
			screen: Index,
		},
		Task: {
			screen: Task,
    },
    User: {
			screen: User,
		},
	},
	{
		tabBarOptions: {
			activeTintColor: '#33a8de',
			inactiveTintColor: '#666',
			showIcon: true,
			showLabel: true,
			upperCaseLabel: false,

			style: {
				backgroundColor: '#fff',
				paddingBottom: 0,
				borderTopWidth: 0.5,
				borderTopColor: '#eee',

			},
			labelStyle: {
				fontSize: 12,
				margin: 1
			},
			indicatorStyle: { height: 0 },
		},
		tabBarPosition: 'bottom',
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
		backBehavior: 'none',
	});

const App = createStackNavigator(
	{
		Home: { screen: MainScreenNavigator },
		Setting: { screen: Setting},
		Login: { screen: Login},
	},
	{
		headerMode: 'none',
	}
);



AppRegistry.registerComponent(appName, () => App);
