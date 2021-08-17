import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import CheckCode from '../screens/CheckCode';
import MainTab from '../stacks/MainTab';
import Control from '../screens/Control';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="CheckCode" component={CheckCode}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Control" component={Control}/>
    </Stack.Navigator>
);