import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class PostDetails extends Component {
  constructor(props){
    super(props);
    let image;
    try{
      if(typeof this.props.post.data.preview.images[0].source.url == undefined){
        image = '';
      } else {
        image = this.props.post.data.preview.images[0].source.url;
      }
    }catch(e){
      console.log(e);
    }
    this.state = {
      title: this.props.post.data.title,
      score: this.props.post.data.score,
      comments: this.props.post.data.num_comments,
      image:image,
      permalink: this.props.post.data.permalink
    }
  }

  openPage(){
    Linking.openURL('https://reddit.com/'+this.state.permalink);
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={styles.stats}>
          Score: {this.state.score} | Comments: {this.state.comments}
        </Text>
        <Image style={styles.image} source={{url: this.state.image}} />
        <TouchableOpacity style={styles.btn} title="Open Reddit" onPress={() => this.openPage()}>
          <Text style={styles.btnText}>Open Reddit</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    padding:10,
    textAlign:'center',
    fontSize:16,
    backgroundColor:'#f4f4f4'
  },
  stats: {
    textAlign:'center',
    padding:4,
    backgroundColor:'#333',
    color:'#fff'
  },
  image:{
    width:400,
    height:200
  },
  btn:{
    backgroundColor:'#f4f4f4',
    padding:10
  },
  btnText:{
    textAlign:'center'
  }
});

AppRegistry.registerComponent('PostDetails', () => PostDetails);
