import React from 'react';
import {Image, View, Text, TouchableHighlight, StyleSheet}  from 'react-native'
import { connect } from 'react-redux';

const Insert = (props)=> {

	console.log(this.props);
	return(

	<View style={styles.container}>
		<Text>Welcome to Byte Me! A Food App to find tasty dishes
		in your area! Let's get started.....</Text>
		<TouchableHighlight>
			<Text>Touch Me!</Text>
		</TouchableHighlight>
	</View>
	)


};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
	};
}

export default connect(mapStateToProps, { })(Insert);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
