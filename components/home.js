import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet}  from 'react-native'

const Insert = (props)=> {
	return(
	
	<View style={styles.container}>
		<Text>Welcome to Byte Me! A Food App to find tasty dishes
		in your area! Let's get started.....</Text>
		<TouchableHighlight>
			<Text>Touch Me!</Text>
		</TouchableHighlight>
	</View>
	)


};

export default Insert


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
