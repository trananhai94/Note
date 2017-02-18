/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import Main from './components/main'
import Dashboard from './components/dashboard'
import Profile from './components/profile'
export default class Note extends Component {
  renderScene(route, navigator){
    let name = route.name
    let passProps = route.passProps
    switch(name) {
      case 'main': return(<Main navigator={navigator} />)
      case 'dashboard': return(<Dashboard navigator={navigator} {...passProps} />)
      case 'profile': return(<Profile navigator={navigator} {...passProps}/>)
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Github Notes', name: 'main', index: 0 }}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
         <Navigator.NavigationBar style={styles.navigationBar}
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>{},
             RightButton: (route, navigator, index, navState) =>{},
             Title: (route, navigator, index, navState) =>
               { return (<Text style={[styles.textNavigator, styles.titleNavigator]}>{route.title}</Text>); },
           }}
         />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textNavigator: {
    color: '#48BBEC',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 10
  },
  titleNavigator: {
    marginLeft: 130,
    fontSize: 25
  }
})


AppRegistry.registerComponent('Note', () => Note);
