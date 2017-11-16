import React, { Component } from 'react';
import { Button, Image, TextInput, View } from 'react-native';

import LogoImage from "../components/LogoImage";
import { connect } from 'react-redux';
import pageStyles from "../styles/pages/loginPage";
import { createTaskImage } from "../img/images"

import { login } from '../actions/authActions';

class LoginPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			login: __DEV__ ? 'vlad@mail.com' : '',
			password: __DEV__ ? '1111' : ''
		};

		this.onLogin = this.onLogin.bind(this);
	}

	onLogin() {
		if (!this.state.login || !this.state.password) {
			// TODO show error
			return;
		}

		this.props.login(this.state.login, this.state.password);
	}

	componentDidMount() {
		this.password.setNativeProps({
			text: this.state.password
		});
	}

	componentWillUpdate(nextProps) {
		if (this.props.authErrorMessage === null && nextProps.authErrorMessage !== null) {
			// TODO error message
		}
	}


	render() {
		return <View>
			<LogoImage/>

			<View style={pageStyles.loginBlock}>


				<TextInput keyboardType='email-address' value={this.state.login} placeholder='Email'
						   onChangeText={text => this.setState({ login: text })}
				/>


				<TextInput ref={component => this.password = component} secureTextEntry placeholder='Password'
						   onChangeText={text => this.setState({ password: text })}
				/>
				<Image source={createTaskImage} style={{ width: 20, height: 20, resizeMode: 'contain' }}/>
				<Button style={{
					marginTop: 10,
					marginHorizontal: '3%'
				}} title='Sign in' onPress={this.onLogin}/>
			</View>
		</View>;
	}
}

const mapStateToProps = ({ auth, authState }) => ({
	token: auth.get('token'),
	...authState.toObject()
});

export default connect(mapStateToProps, { login })(LoginPage);