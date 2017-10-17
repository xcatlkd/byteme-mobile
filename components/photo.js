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
			console.log("_fetch state: ", this.state);
		})
		.catch((error) => {
			console.error(error);
		})
	}

	componentDidMount() {
		this._fetchPhotos();
	}
	render() {
		const { images } = this.state;
		console.log(images);
	return (
		// <ScrollView style={styles.container}>
				<Container>
					{/* <Header /> */}
					<View style={styles.photoContainer}>
						<DeckSwiper
							ref={(c) => this._deckSwiper = c }
							dataSource={images}
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
												<Thumbnail source={{ uri: 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/' + photo.id}}/>
												<Body>
													<Text style={styles.title}>
														{ photo.title }
													</Text>
													<Text note={styles.note}>Byte Me</Text>
												</Body>
											</Left>
										</CardItem>
										<CardItem cardBody>
											<Image style={{ height: 300, flex: 1 }} source= {{ uri: 'https://s3.us-east-2.amazonaws.com/bytemeimagestorage/' + photo.id}} />

										</CardItem>
										<CardItem>
											<Text>
												{ photo.title }
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
