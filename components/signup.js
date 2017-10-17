import React from 'react';
import {
				StyleSheet,
				TouchableOpacity,
				Text,
			 	Image,
			 	KeyboardAvoidingView }  from 'react-native';

import { Button,
				 Container,
				 Content,
				 Form,
				 Item,
				 Input,
				 Toast } from "native-base";

import { FormLabel,
				 FormInput,
				 FormValidationMessage } from 'react-native-elements';


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
	<Container style={styles.container}>
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<FormLabel style={styles.form}>
				Username:
			</FormLabel>
			<FormInput style={styles.input} onChangeText={(username) => this.setState({username})}
	    value={this.state.username}/>
			<FormValidationMessage style={styles.error}>
				{'This field is required'}
			</FormValidationMessage>
			<FormLabel>
				Password:
			</FormLabel>
			<FormInput style={styles.input} onChangeText={(password) => this.setState({password})}
			value={this.state.password}/>
			<FormValidationMessage style={styles.error}>
				{'This field is required'}
			</FormValidationMessage>
		</KeyboardAvoidingView>

			<Button style={styles.button}><Text>Sign Up</Text></Button>
</Container>

		// <Image
		// 	style={styles.logo}
		// 	source={{uri: 'https://imgur.com/NL5irJA'}}
		// />
		)
	}
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#F0F8FF',
		alignItems: 'center',
		justifyContent: 'center',
		// padding: 20
	},

	form: {
		justifyContent: 'center',
	},

	input: {
		width: 225,
		height: 40,
	},

	button: {
		marginLeft: 145,

	},

	error: {
		marginBottom: 10,
	},

	logo: {
		width: 66,
		height: 58,
	},

});
