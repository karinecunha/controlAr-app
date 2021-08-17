import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Search from '../screens/Search';
import Check from '../screens/Check';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar = {props => <CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Schedule" component={Schedule}/>
        <Tab.Screen name="Check" component={Check}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
);

