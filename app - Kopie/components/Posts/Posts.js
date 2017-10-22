import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: 'food',
      limit: 5
    }
  }

  componentDidMount(){
    this.fetchPosts();
  }
  
  fetchPosts(){
    fetch('https://www.reddit.com/r/'+this.state.category+'/top.json?limit='+this.state.limit)
      .then((response) => response.json())
      .then((response) => {
        let posts = response.data.children;
        console.log(posts);
      });
  }

  render() {
    return (
      <View>
       <Text>POSTS COMPONENT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Posts', () => Posts);
