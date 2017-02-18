import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Badge extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image source = {{uri: this.props.userInfo.avatar_url}} style={styles.image} />
				<View>
					<Text style={styles.name}>{this.props.userInfo.name}</Text>
					<Text style={styles.handle}>{this.props.userInfo.login}</Text>
				</View>
			</View>
		)
	}
}

Badge.propTypes = {
	userInfo: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#48BBEC',
		paddingBottom: 10,
		paddingTop: 70
	},
	name: {
		alignSelf: 'center',
		fontSize: 21,
		marginBottom: 5,
		marginTop: 10,
		color: '#fff'
	},
	handle: {
		fontSize: 16,
		alignSelf: 'center',
		color: '#fff'
	},
	image: {
		height: 125,
		width: 125,
		borderRadius: 65,
		alignSelf: 'center'
	},
	
})

module.exports = Badge