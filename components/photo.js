import React from 'react';
import {Image, Text, TouchableHighlight, StyleSheet, ScrollView }  from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Left, Body } from 'native-base';
import Photos from '../json/test.json';

export default class Photo extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		console.log(Photos);
	return (
		// <ScrollView style={styles.container}>
				<Container>
					{/* <Header /> */}
					<View>
						<DeckSwiper
							dataSource={Photos}
							renderItem={photo => {
								return (
									<Card style={{ elevation: 3 }}>
										<CardItem>
											<Left>
												<Body>
													<Text>
														{ photo.name }
													</Text>
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
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
});
