import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

//##### Import components ##################################################
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import LandingScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import PhotosScreen from '../components/PhotosScreen';

// #####  Setup routes / pages #############################################

export const AppNavigator = StackNavigator({
	Login: { screen: LoginScreen },
	Signup: { screen: SignupScreen },
	Landing: { screen: LandingScreen },
	Profile: { screen: ProfileScreen },
	Photos: { screen: PhotosScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);


AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);