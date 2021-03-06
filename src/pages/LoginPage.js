import React, { Component } from 'react';
import {
    Icon, Body, Button, Container, Content, Form, Header, Input, Item, Label, Spinner, Text,
    Title, Toast, Fab, Left, Right
} from 'native-base';
import { View } from 'react-native';
import styles from "../styles/loginPage";
import LogoImage from "../components/LogoImage";
import FullScreenLoader from '../components/FullScreenLoader';
import { connect } from 'react-redux';
import localization from '../localization';

const { login } = require('../actions/authActions').Creators;

class LoginPage extends Component {
    static navigationOptions = {
        header: <Header>
            <Left />
            <Body>
                <Title>
                    {localization.signIn}
                </Title>
            </Body>
            <Right />
        </Header>
    };

    constructor(props) {
        super(props);

        this.state = {
            login: __DEV__ ? 'vlad@mail.com' : '',
            password: __DEV__ ? '1111' : ''
        };

        this.onLogin = this.onLogin.bind(this);
        this.onOpenSettings = this.onOpenSettings.bind(this);
    }

    onLogin() {
        if (!this.state.login || !this.state.password) {
            Toast.show({
                text: 'You must enter login and password!',
                duration: 2000
            });
            return;
        }

        this.props.login(this.state.login, this.state.password);
    }

    onOpenSettings() {
        this.props.navigation.navigate('AppSettings');
    }

    componentDidMount() {
        this.password.setNativeProps({
            text: this.state.password
        });
    }

    componentWillUpdate(nextProps) {
        if (this.props.authErrorMessage == null && nextProps.authErrorMessage != null)
            Toast.show({
                text: nextProps.authErrorMessage,
                buttonText: 'OK',
                duration: 5000
            });
    }


    render() {
        return <Container>
            <FullScreenLoader isVisible={this.props.authInProgress} />

            <LogoImage />

            <View style={styles.loginBlock}>
                <Form>
                    <Item>
                        <Icon name='ios-contact-outline' />
                        <Input keyboardType='email-address' value={this.state.login} placeholder='Email'
                            onChangeText={text => this.setState({ login: text })}
                        />
                    </Item>
                    <Item>
                        <Icon name='ios-finger-print' />
                        <Input ref={component => this.password = component} secureTextEntry placeholder='Password'
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </Item>
                </Form>
                <Button full bordered style={{
                    marginTop: 10,
                    marginHorizontal: '3%'
                }}
                    onPress={this.onLogin}
                >
                    <Text>Sign in</Text>
                </Button>
            </View>

            <Fab position='topRight'
                style={{
                    backgroundColor: '#FF6E40'
                }}
                onPress={() => this.props.navigation.navigate('AppSettings')}
            >
                <Icon name="settings" />
            </Fab>
        </Container>;
    }
}

const mapStateToProps = ({ auth, authState }) => ({
    token: auth.get('token'),
    ...authState.toObject()
});

export default connect(mapStateToProps, { login })(LoginPage);