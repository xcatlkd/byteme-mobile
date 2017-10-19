import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Image, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Button, Icon } from 'native-base';
// import Photos from '../json/test.json';

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

	componentDidMount() {
		this._fetchPhotos();
	}
	render() {
		const { images } = this.state;
		const filePath = "https://s3.us-east-2.amazonaws.com/bytemeimagestorage/"
		return (
			<Container>
				{/* <Header /> */}
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
		)
	}
};

function mapStateToProps(state, props) {
	return {
		isLoggedIn: state.users.isLoggedIn,
		images: state.images.images,
	};
}

export default connect(mapStateToProps, { })(Photo);

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
