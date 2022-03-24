import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Home from '../screens/Home'
import Crypto from '../screens/Crypto'
import Profile from '../screens/Profile'

import homeLogo from '../assets/icons/Home.png';
import cryptoLogo from '../assets/icons/Chart.png';
import profileLogo from '../assets/icons/Profile.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...style.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={homeLogo}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? '#80c6ff' : '#3d9be9',
                        }}
                        />
                        <Text style={style.tabFont}>Home</Text>
                    </View>
                )
            }}></Tab.Screen>
            <Tab.Screen name="Crypto" component={Crypto} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={cryptoLogo}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? '#80c6ff' : '#3d9be9',
                        }}
                        />
                        <Text style={style.tabFont}>Crypto</Text>
                    </View>
                )
            }}></Tab.Screen>
                        <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                        <Image
                        source={profileLogo}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? '#80c6ff' : '#3d9be9',
                        }}
                        />
                        <Text style={style.tabFont}>Profile</Text>
                    </View>
                )
            }}></Tab.Screen>
                        
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabFont: {
        fontSize: 10,
        color: '#3d9be9',
        fontFamily: 'avalontwo',
    }
});

export default Tabs;