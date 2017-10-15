import React from 'react';
import {Image, View, TextInput, StyleSheet, TouchableOpacity, Text }  from 'react-native';
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
	<View style={styles.container}>
<<<<<<< HEAD
		<TextInput
			placeholder="username or email"
			placeholderTextColor="rgba(0, 255, 0, 0.4);"
			style={styles.input}
		/>
=======
		<FormLabel>
			Username:
		</FormLabel>
		<FormInput onChangeText={(text) => this.setState({text})}
    value={this.state.text}/>
		<FormValidationMessage>
			{'This field is required'}
		</FormValidationMessage>
		<FormLabel>
			Password:
			<FormInput onChangeText={(text) => this.setState({text})}
			value={this.state.text}/>
			<FormValidationMessage>
				{'This field is required'}
			</FormValidationMessage>
		</FormLabel>
		{/* %%%% Fix the display on forms and work out functionality %%%% */}
>>>>>>> origin/development-signup
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
