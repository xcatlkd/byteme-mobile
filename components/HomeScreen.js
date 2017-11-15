import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet}  from 'react-native';
import {
	Button,
	Container,
} from 'native-base';
import { connect } from 'react-redux';
import AuthButton from './AuthButton';
import { getPhotos } from '../actions/images';
import { photos, login, signup } from "../actions/nav";

class Home extends React.Component {

	componentDidMount() {
		this.props.getPhotos();
	}

	render() {
		console.log("Home  render;  getPhotos(): ", this.props.imagesLoaded);
		return(
			<Container style={styles.container} >
				<View style={styles.centerView} >
					<Image style={styles.backgroundImage} source={require('../assets/images/BrusselsSprouts01.jpg')} />
					<Text style={styles.titleText}>Welcome to Byte Me! A Food App to find tasty dishes
					in your area! Let's get started.....</Text>
					<Container>
						<AuthButton style={styles.centerView}/>
					</Container>
				</View>
			</Container>
		)
	}


};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		isLoading: state.application.isLoading,
		imagesLoaded: state.application.imagesLoaded,
	};
}

export default connect(mapStateToProps, { getPhotos, photos, signup })(Home);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 25,
    // paddingRight: 25,
  },
  titleText: {
  	textAlign: 'center',
  },
  centerView: {
  	alignItems: 'center',
  },
  backgroundImage: {
  	flex: 1,
  	justifyContent: 'center',
  	resizeMode: 'cover',
  },
});
