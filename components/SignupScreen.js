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

import { signup } from '../actions/users';

class SignUp extends React.Component {
	constructor(props) {
		super(props); {
			this.state = {
				username: "",
				password: "",
				confrimPass: "",
			};
		}
	}

	_handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.confirmPass && this.state.confirmPass === this.state.password) {
			this.props.signup(this.state);
		}
	}


	render() {
		let error = this.props.error ? this.props.error : null;

		return(
			<Container style={styles.container}>
				<KeyboardAvoidingView style={styles.container} behavior="padding">
					<FormLabel style={styles.form}>
						Username:
					</FormLabel>
					<FormInput style={styles.input} onChangeText={(username) => this.setState({username})}
			    value={this.state.username}/>
					<FormValidationMessage style={styles.error}>
						{error}
					</FormValidationMessage>
					<FormLabel>
						Password:
					</FormLabel>
					<FormInput secureTextEntry={true} style={styles.input} onChangeText={(password) => this.setState({password})}
					value={this.state.password}/>
					<FormLabel>
						Confirm your password:
					</FormLabel>
					<FormInput secureTextEntry={true} style={styles.input} onChangeText={(confirmPass) => this.setState({confirmPass})}
					value={this.state.confirmPass}/>
					<Button style={styles.button} onPress={this._handleSubmit}><Text>Sign Up</Text></Button>
				</KeyboardAvoidingView>
			</Container>
		)
	}
};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		error: state.users.error,
	};
}

export default connect(mapStateToProps, { signup })(SignUp);

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
		marginBottom: 100,
		alignSelf: 'center',
	},

	error: {
		// marginBottom: 10,
	},

	logo: {
		width: 66,
		height: 58,
	},

});
