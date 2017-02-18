import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  Modal
} from 'react-native';

export default class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	goToProfile() {
		this.props.navigator.push({
			name: 'profile',
			passProps: {userInfo: this.props.userInfo}
		})
	}
	goToRepos() {
		console.log('Repository Page')
	}
	goToNotes() {
		console.log('Notes Page')
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
		        <TouchableHighlight onPress={this.goToProfile.bind(this)} style={[styles.backgroundProfile, styles.backgroundDashboard]} underlayColor='#88D4F5'>
		          <Text style={styles.buttonText}>View Profiles</Text>
		        </TouchableHighlight>
		        <TouchableHighlight onPress={this.goToRepos.bind(this)} style={[styles.backgroundRepos, styles.backgroundDashboard]} underlayColor='#88D4F5'>
		          <Text style={styles.buttonText}>View Repository</Text>
		        </TouchableHighlight>
		        <TouchableHighlight onPress={this.goToNotes.bind(this)} style={[styles.backgroundNotes, styles.backgroundDashboard]} underlayColor='#88D4F5'>
		          <Text style={styles.buttonText}>Notes</Text>
		        </TouchableHighlight>	    
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#48BBEC',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 25,
		marginBottom: 20,
		textAlign: 'center',
		color: '#fff',
	},
	image: {
		height: 400,
		width: 400,
		resizeMode: 'contain'
	},
	buttonText: {
		fontSize: 25,
		marginBottom: 20,
		alignSelf: 'center',
		color: '#fff',
	},
	backgroundDashboard: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		flex: 1,
	},
	backgroundProfile: {
		backgroundColor: '#4BBBEC'
	},
	backgroundRepos: {
		backgroundColor: '#E77AAE'
	},
	backgroundNotes: {
		backgroundColor: '#758BF4'
	}
})

module.exports = Dashboard