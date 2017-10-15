import React from 'react';
import {Image, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Button, Icon } from 'native-base';
// import Photos from '../json/test.json';

export default class Photo extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			images: [],
		}
	}

	_fetchPhotos = () => {
		return fetch("https://desolate-anchorage-50545.herokuapp.com/api/posts")
		// .then((data) => data.JSON())
		.then((data) => {
			this.setState({
				images: JSON.parse(data._bodyText),
			});
		})
		.then(() => {
			console.log("_fetch   state: ", this.state);
		})
		.catch((error) => {
			console.error(error);
		})
	}
<<<<<<< HEAD

	componentDidMount() {
		this._fetchPhotos();
	}
	render() {
		console.log(this.state.images);
		const { images } = this.state;
=======
	render() {
		console.log(Photos);

>>>>>>> origin/development-signup
	return (
		// <ScrollView style={styles.container}>
				<Container>
					{/* <Header /> */}
					<View style={styles.photoContainer}>
						<DeckSwiper
							ref={(c) => this._deckSwiper = c }
<<<<<<< HEAD
							dataSource={images}
=======
							dataSource={Photos}
>>>>>>> origin/development-signup
							renderEmpty={() =>
							 <View style={{ alignSelf: "center" }}>
								<Text style={styles.noPhotoText}>NO MORE PHOTOS</Text>
							</View>
						}
							renderItem={photo => {
								return (
									<Card style={{ elevation: 3 }}>
										<CardItem>
											<Left>
<<<<<<< HEAD
												<Thumbnail source={{ uri: 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/' + photo.id}}/>
=======
												<Thumbnail source={{ uri: photo.imageURL}}/>
>>>>>>> origin/development-signup
												<Body>
													<Text style={styles.title}>
														{ photo.name }
													</Text>
													<Text note={styles.note}>Byte Me</Text>
												</Body>
											</Left>
										</CardItem>
										<CardItem cardBody>
<<<<<<< HEAD
											<Image style={{ height: 300, flex: 1 }} source= {{ uri: 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/' + photo.id}} />
=======
											<Image style={{ height: 300, flex: 1 }} source= {{ uri: photo.imageURL}} />
>>>>>>> origin/development-signup
										</CardItem>
										<CardItem>
											<Text>
												{ photo.name }
											</Text>
										</CardItem>
									</Card>
								);
						}}
						/>
		 				</View>
						{/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View> */}
		 			</Container>
		// <TouchableHighlight>
		// 	<Text>Touch Me!</Text>
		// </TouchableHighlight>
		)
	}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginTop: 150,
    backgroundColor: '#fff',
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
