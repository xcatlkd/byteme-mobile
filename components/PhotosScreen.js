import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Image, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Button, Icon } from 'native-base';
import { getPhotos, leftSwipe, rightSwipe } from '../actions/images';

class Photo extends Component {
	constructor (props) {
		super(props);
		this.state = {
			images: [{
				title: "Sami!",
				description: "Null",
				id: "https://s3.us-east-2.amazonaws.com/bytemeimagestorage/1505352183872",
			}],
		}
	}

	_handleSwipeLeft = (index) => {
		this.props.leftSwipe(index);
	}
	_handleSwipeRight = (index) => {
		this.props.rightSwipe(index);
	}
 
	render() {
		let images = this.props.images ? this.props.images : this.state.images;
		const filePath = "https://s3.us-east-2.amazonaws.com/bytemeimagestorage/"
		return (
			<Container>
				<View style={styles.photoContainer}>
					<DeckSwiper
						ref={(c) => this._deckSwiper = c }
						dataSource={images}

						renderItem={photo => {
							return (
								<Card style={{ elevation: 3 }}>
									<CardItem>
										<Left>
											<Thumbnail source={{ uri: `${filePath}${photo.id}` }}/>
											<Body>
												<Text style={styles.title}>
													{ photo.title }
												</Text>
												<Text note={styles.note}>Byte Me</Text>
											</Body>
										</Left>
									</CardItem>
									<CardItem cardBody>
										<Image style={{ height: 300, flex: 1 }} source={{ uri: `${filePath}${photo.id}` }} />

									</CardItem>
									<CardItem>
										<Text>
											{ photo.title }
										</Text>
									</CardItem>
								</Card>
							);
						}}
						onSwipeLeft={(index) => this._handleSwipeLeft(index)}
						onSwipeRight={(index) => this._handleSwipeRight(index)}
					/>{/* This closes the deckswiper component */}
	 			</View>
	 		</Container>
		)
	}
};

function mapStateToProps(state) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		images: state.images.images,
		leftImages: state.images.leftImages,
		rightImages: state.images.rightImages,
	};
}

export default connect(mapStateToProps, { getPhotos, leftSwipe, rightSwipe })(Photo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginTop: 150,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',

  },

	photoContainer: {
		// alignItems: 'center',
		// flexGrow: 1,
		// justifyContent: 'center',
		paddingTop: 100,
	},
	noPhotoText: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	title: {
		fontWeight: 'bold',
	},
	note: {
		color: '#d3d3d3',
	}
});
