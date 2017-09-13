import React from 'react';
import {Image, View, TextInput, StyleSheet, TouchableOpacity, Text }  from 'react-native'

export default class SignUp extends React.Component {
	render() {
	return(
	<View style={styles.container}>
		<TextInput
			placeholder="username or email"
			placeholderTextColor="rgba(0, 255, 0, 0.4);"
			style={styles.input}
		/>
	</View>
	)

	}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	// input: {
	// 	height:
	// 	backgroundColor:
	// 	marginCenter:
	// 	color:
	// 	paddingHorizontal:
	// }
});
