import React from 'react';


import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, NavigatorIOS} from 'react-native';


class ThirdScreen extends React.Component  {

    static navigationOptions = {
        title: 'Third Screen',
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
        return (
            <View>

            </View>
        );
    }
}




module.exports = ThirdScreen;