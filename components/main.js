import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
  ActivityIndicator,
} from 'react-native';
import api from '../urls/api'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			isLoading: false,
			error: false
		}
	} 
	handleChangeText(value) {
		this.setState({
			username: value.nativeEvent.text
		})
	}
	handleSubmit() {
		this.setState({
			isLoading: true,
		})
		api.getBio(this.state.username).then((res) => {
			if (res.message === 'Not Found') {
				this.setState({
					error: 'User not found',
					isLoading: false
				})
			} else {
				this.props.navigator.push({
					name: 'dashboard',
					title: res.name || 'Select an Option',
					passProps: {userInfo: res}
				})
				this.setState({
					isLoading: false,
					error: false,
					username: ''
				})
			}
		})
	}
	render() {
		let showErr = (
			this.state.error ? <Text style={styles.title}> {this.state.error} </Text> : <View></View>
		)
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Search for a Github User</Text>
				<TextInput 
					style={styles.searchInput}
					value={this.state.username}
					underlineColorAndroid="transparent"
					onChange={this.handleChangeText.bind(this)} />
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)} 
					underlayColor='#fff'>
					<Text style={styles.buttonText}>SEARCH</Text>
				</TouchableHighlight>
				<ActivityIndicator animating={true} color='#fff' size='large' style={
					{marginTop:20, marginBottom: 20, opacity:this.state.isLoading ? 1 : 0}
				}/>
				{showErr}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#48BBEC',
		justifyContent: 'center',
		padding: 30,
	},
	title: {
		fontSize: 25,
		marginBottom: 20,
		textAlign: 'center',
		color: '#fff',
	},
	searchInput: {
		width: 530,
		paddingLeft: 20,
		color: '#fff',
		height: 50,
		padding: 4,
		fontSize: 23,
		alignSelf: 'center',
		borderWidth: 2,
		borderColor: '#fff',
		marginBottom: 10
	},
	button: {
		height: 60,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderColor: '#fff',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 20
	}
})

module.exports = Main