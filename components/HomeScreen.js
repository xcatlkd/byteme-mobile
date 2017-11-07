import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet}  from 'react-native';
import {
	Button,
	Container,
} from 'native-base';
import { connect } from 'react-redux';
import { getPhotos } from '../actions/images';
import { photos } from "../actions/nav";

class Home extends React.Component {
	
	_handleSubmit = (event) => {
		// if (!this.props.isLoggedIn) {

		// }
		if (this.props.isLoggedIn) {
			event.preventDefault();
			console.log(this.props);
			this.props.photos();
		}
	}

	componentDidMount() {
		this.props.getPhotos();
	}

	render() {
	let AuthButton;
	let AuthButtonText;

	if (!this.props.isLoggedIn) {
		AuthButton = "Signup";
		AuthButtonText = "Login or Signup!";
	}
	if (this.props.isLoggedIn) {
		AuthButton = "UserPage";
		AuthButtonText = "Check out dishes close to you now!";
	}

		return(
			<Container style={styles.container} >
				<View style={styles.container}>
					<Text style={styles.titleText}>Welcome to Byte Me! A Food App to find tasty dishes
					in your area! Let's get started.....</Text>
					<Container style={styles.container} >
						<Button style={styles.authButton} onPress={this._handleSubmit}><Text>{AuthButtonText}</Text></Button>
					</Container >
				</View>
			</Container >
		)
	}


};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		imagesLoaded: state.application.imagesLoaded,
	};
}

export default connect(mapStateToProps, { getPhotos, photos })(Home);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  titleText: {
  	flex: 2,
  	paddingTop: 250,
  	textAlign: 'center',
  },
  authButton: {
  	flex: 1,
  	justifyContent: 'center',
  },

});
