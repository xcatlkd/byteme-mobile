import React from 'react';
import {Image, View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView }  from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class SignUp extends React.Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				password: "",
			};
		}
	}

	render() {
	return(
	<KeyboardAvoidingView style={styles.container} behavior="padding">
		<FormLabel>
			Username:
		</FormLabel>
		<FormInput onChangeText={(username) => this.setState({username})}
    value={this.state.username}/>
		<FormValidationMessage>
			{'This field is required'}
		</FormValidationMessage>
		<FormLabel>
			Password:
		</FormLabel>
		<FormInput onChangeText={(password) => this.setState({password})}
		value={this.state.password}/>
		<FormValidationMessage>
			{'This field is required'}
		</FormValidationMessage>
		{/* %%%% Fix the display on forms and work out functionality %%%% */}
	</KeyboardAvoidingView>
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

	text: {
		width: 200,
		height: 400,
	}
//	^^ Clean this up ^^

	// input: {
	// 	height:
	// 	backgroundColor:
	// 	marginCenter:
	// 	color:
	// 	paddingHorizontal:
	// }
});
