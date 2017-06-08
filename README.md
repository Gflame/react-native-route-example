# react-native-route-example
Example to make a simple app route in react-native for IOS

After install and setup your project 
   ```
$ npm install --g react-native-cli  
  ```
  
   ```
$ react-native init YourApp  
  ```

..cd YourApp 

- Open index.ios.js and include component 'NavigatorIOS' on react-native like this
 
 ```
 import {AppRegistry, View, TouchableHighlight, StyleSheet, Text, Image, StatusBar, NavigatorIOS } from 'react-native';
 ```
 
after this
 ```
$ npm install react-navigation --save  
 ```
and  
 ```
  import {StackNavigator} from 'react-navigation'; 
 ```

- Import  your screen  or states of app

 ```
import SecondScreen from './src/SecondScreen';
import ThirdScreen  from './src/ThirdScreen';
  ```
  - Create Your home class and set up 'navigationOptions'
  
 ```
class HomeScreen extends React.Component  {
//set up your navigation bar view options
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
//set up navigation onPress

        const { navigate } = this.props.navigation;

        return (
            <View >
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
 ```
