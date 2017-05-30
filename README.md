# react-native-route-example
Example to make a simple app route in react-native for IOS

After install and setup your project 

$ npm install -g react-native-cli <br>
$ react-native init YourApp <br>
cd YourApp 

open index.ios.js and include component 'NavigatorIOS' on react-native like this
<code>import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, <b>NavigatorIOS</b>} from 'react-native';</code>
after this <br>
$ npm install react-navigation -save <br>
and <code>import {StackNavigator} from 'react-navigation';</code>


