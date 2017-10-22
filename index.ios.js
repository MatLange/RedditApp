import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Posts from './app/components/Posts/Posts';

export default class subreddits extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'posts':
        return(
          <View style={styles.container}>
            <Posts navigator={navigator} title="posts" />
          </View>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'posts'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20
  }
});

AppRegistry.registerComponent('subreddits', () => subreddits);
