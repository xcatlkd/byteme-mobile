import React from 'react';
import {
				StyleSheet,
				TouchableOpacity,
				Text,
			 	Image, }  from 'react-native';

import { Button,
				 Container,
				 Content,
				 Form,
				 Item,
				 Input,
				 Toast } from "native-base";

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

		<Form style={styles.form}>
			<Item underline>
				<Input
					onChangeText={username => this.setState({ username })}
					placeholder="Username"
				/>
			</Item>
			<Item underline>
				<Input
					secureTextEntry
					onChangeText={password => this.setState({ password })}
					placeholder="Password"
				/>
			</Item>
			<Button style={styles.button}>
				<Text>Sign Up</Text>
			</Button>
		</Form>

		<Image
			style={styles.logo}
			source={{uri: 'https://imgur.com/NL5irJA'}}
		/>
	</Container>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7ba428',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	form: {
		paddingRight: 45,
		paddingLeft: 35,
		top: -20
	},
	button: {
		marginTop: 25,
		marginLeft: 15
	},

	logo: {
		width: 66,
		height: 58,
	}
});
