import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
<<<<<<< HEAD
<<<<<<< HEAD
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Photos from '../json/test.json';
=======
import Photos from '../json/test.json';

>>>>>>> 725b35eb769466ea368e32c00780e13915de0d12


=======
import Photos from '../json/test.json';

<<<<<<< HEAD
=======
import Photos from '../json/test.json';

>>>>>>> 5cfa4e46acb1340864231d6dba0c13252eacabd4
=======
>>>>>>> 725b35eb769466ea368e32c00780e13915de0d12
export default class Photo extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		console.log(Photos);
	return(
		<ScrollView style={styles.container}>
			{Photos.map(function(pic){
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 725b35eb769466ea368e32c00780e13915de0d12
				return
				<Text source={{
					uri: pic.name
				}}
			/>
				<Image source={{
<<<<<<< HEAD
=======
				return <Image source={{
>>>>>>> 5cfa4e46acb1340864231d6dba0c13252eacabd4
=======
				return <Image source={{
>>>>>>> 725b35eb769466ea368e32c00780e13915de0d12
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
