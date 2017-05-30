import React from 'react';


import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, NavigatorIOS} from 'react-native';



class SecondScreen extends React.Component  {

    static navigationOptions = {
        title: 'Second Screen',
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




module.exports = SecondScreen;