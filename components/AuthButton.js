import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet}  from 'react-native';
import {
	Button,
	Container,
} from 'native-base';
import { connect } from 'react-redux';
import { login, signup, photos } from '../actions/nav';

class AuthButton extends React.Component {

	_handleSubmit = (event) => {
		console.log("AuthButton;   this.props: ", this.props);
		event.preventDefault();
		if (!this.props.isLoggedIn) {
			this.props.login();
		}
		else {
			this.props.photos();
		}
	}
	_handleSignup = (event) => {
		event.preventDefault();
		this.props.signup();
	}

	render() {
		let AuthState;
		let content;
		if (!this.props.isLoggedIn) {
			content = (
				<View style={styles.authButton}>
					<Button onPress={this._handleSubmit}><Text>Login</Text></Button>
					<TouchableHighlight onPress={this._handleSignup}><Text>No account yet?! Signup here</Text></TouchableHighlight>
				</View>
			)
		}
		if (!this.props.imagesLoaded) {
			content = (
				<View style={styles.authButton}>
					<Image source={require('../assets/icons/foodLoading01.gif')} style={{ width: 85, height: 85 }} />
				</View>
			)
		}

		if (this.props.isLoggedIn) {
			content = (
				<View style={styles.authButton}>
					<Button onPress={this._handleSubmit}><Text>Feed me!</Text></Button>
				</View>
			)
		}
		return content;

	}
}
const styles = StyleSheet.create({
  authButton: {
  	alignItems: 'center',
  },
});

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		imagesLoaded: state.application.imagesLoaded,
		// images: state.images.images,
	}
}

export default connect(mapStateToProps, { login, signup, photos })(AuthButton);