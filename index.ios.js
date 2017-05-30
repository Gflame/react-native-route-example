/**
 * Sample React Native Example Route App
 */

import React from 'react';


import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, NavigatorIOS} from 'react-native';

import {StackNavigator} from 'react-navigation';


import SecondScreen from './src/SecondScreen';
import ThirdScreen  from './src/ThirdScreen';


class HomeScreen extends React.Component  {

    static navigationOptions = {
        title: 'Your App Name',
        headerTintColor: 'white',
        headerTitleStyle: {
            color: '#fff'
        },
        headerStyle: {
            backgroundColor: 'blue'
        },
        barStyle:{
            color:'#fff'
        }


    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <TouchableHighlight  onPress={() => navigate('SecondScreen')}>
                    <Text>Second Screen</Text>
                </TouchableHighlight>
                <TouchableHighlight   onPress={() => navigate('ThirdScreen')}>
                    <Text>Third Screen</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const YourAppRoute = StackNavigator({
    Home: {screen: HomeScreen},
    SecondScreen: {screen: SecondScreen},
    ThirdScreen: {screen: ThirdScreen},
});


AppRegistry.registerComponent('reactNativeRouteExample', () => YourAppRoute);
