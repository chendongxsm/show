/** @format */
// #53a0f8

import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import {name as appName} from './app.json';
import Index from './app/pages/index/index'
import Task from './app/pages/task/task'
import User from './app/pages/user/user'
import Setting from './app/pages/user/setting'
import Login from './app/pages/user/login'
import Register from './app/pages/user/register'
import Utils from './app/utils/util'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

global.Post = Utils.post
global.Get = Utils.get
global.Log = Utils.log
global.Width = Utils.width
global.Height = Utils.height
global.Scale = Utils.scale
global.Path = 'http://192.168.0.107/show-api/public/index.php/api/'

const MainScreenNavigator = createBottomTabNavigator(
	{
		Index: {
			screen: Login,
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
		Register: { screen: Register},
	},
	{
		headerMode: 'none',
	}
);

AppRegistry.registerComponent(appName, () => App);
