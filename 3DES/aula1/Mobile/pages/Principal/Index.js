import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import Home from '../Home/Index';
import Usuario from '../Usuario/Index';

import { AntDesign } from '@expo/vector-icons';

export default function Principal() {
    return(
        <Tab.Navigator activeColor="purple" inactiveColor="black" barStyle={{ backgroundColor: "yellow"}}>
            <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={25} color={color}/>
          ),
        }}/>
            <Tab.Screen name="Usuario" component={Usuario} options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }} />
        </Tab.Navigator>
    )
}