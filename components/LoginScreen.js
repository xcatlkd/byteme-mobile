import React from 'react';
import { connect } from 'react-redux';
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

import { signup, login } from '../actions/users';

class SignUp extends React.Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				password: "",
			};
		}
	}

	_handleSubmit = (event) => {
		event.preventDefault();
		this.props.login(this.state);
	}


	render() {
		console.log("handleSubmit; login:   this.props: ", this.props)
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
					<FormInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.setState({password})}
					value={this.state.password}/>
					<FormValidationMessage style={styles.error}>
						{'This field is required'}
					</FormValidationMessage>
					<Button style={styles.button} onPress={this._handleSubmit}><Text>Sign Up</Text></Button>
				</KeyboardAvoidingView>
			</Container>

		// <Image
		// 	style={styles.logo}
		// 	source={{uri: 'https://imgur.com/NL5irJA'}}
		// />
		)
	}
};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		error: state.users.error,
	};
}

export default connect(mapStateToProps, { signup, login })(SignUp);

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
		marginLeft: 150,
		paddingBottom: 40,
	},

	error: {
		marginBottom: 10,
	},

	logo: {
		width: 66,
		height: 58,
	},

});
