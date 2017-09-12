import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Photos from '../json/test.json';



export default class Photo extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		console.log(Photos);
	return(
		<ScrollView style={styles.container}>
			{Photos.map(function(pic){
				return
				<Text source={{
					uri: pic.name
				}}
			/>
				<Image source={{
					uri: pic.imageURL
				}}
				 style={{width: 200, height: 200}}
			/>
			})}
		</ScrollView>
		// <TouchableHighlight>
		// 	<Text>Touch Me!</Text>
		// </TouchableHighlight>
	)

	}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
	// Image: {
	// 	height: 280,
	// 	width: 100,
	//
	// }
});
