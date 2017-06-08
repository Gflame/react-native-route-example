# react-native-route-example
Example to make a simple app route in react-native for IOS

After install and setup your project 
   ```
$ npm install -g react-native-cli  
  ```
  
   ```
$ react-native init YourApp  
  ```

cd YourApp 

open index.ios.js and include component 'NavigatorIOS' on react-native like this
  ```
 import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, NavigatorIOS } from 'react-native'; 
 ```
after this <br>
$ npm install react-navigation -save <br>
and  
 ```
  import {StackNavigator} from 'react-navigation';</code>
 ```

