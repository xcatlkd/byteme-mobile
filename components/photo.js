import React from 'react';
import {Image, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Button, Icon } from 'native-base';

import Photos from '../json/test.json';

export default class Photo extends React.Component {
	constructor (props) {
		super(props);
		isLoading: true,
		dataSource: Photos,
	}
  componentDidMount() {
    return fetch('https://desolate-anchorage-50545.herokuapp.com/api/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


	render() {
		console.log(Photos);

	return (
		// <ScrollView style={styles.container}>
				<Container>
					{/* <Header /> */}
					<View style={styles.photoContainer}>
						<DeckSwiper
							ref={(c) => this._deckSwiper = c }
							dataSource={Photos}
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
												<Thumbnail source={{ uri: photo.imageURL}}/>
												<Body>
													<Text style={styles.title}>
														{ photo.name }
													</Text>
													<Text note={styles.note}>Byte Me</Text>
												</Body>
											</Left>
										</CardItem>
										<CardItem cardBody>
											<Image style={{ height: 300, flex: 1 }} source= {{ uri: photo.imageURL}} />
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
