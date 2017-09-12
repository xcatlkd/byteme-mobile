import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'

const Insert = (props)=> {
	return(

	<View style={styles.container}>
		{Image}
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
