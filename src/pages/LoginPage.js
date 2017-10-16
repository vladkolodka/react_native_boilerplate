import React, { Component } from 'react';
import {
    Body,
    Button,
    Container,
    Content,
    Form,
    Header,
    Input,
    Item,
    Label,
    Spinner,
    Text,
    Title,
    Toast,
    Fab,
    Icon
} from 'native-base';
import { View } from 'react-native';

import { connect } from 'react-redux';

const { login } = require('../actions/authActions').Creators;

class LoginPage extends Component {
    static navigationOptions = {
        header: <Header>
            <Body>
            <Title>
                Sign in
            </Title>
            </Body>
        </Header>
    };

    constructor(props) {
        super(props);

        this.state = {
            login: __DEV__ ? 'user@gmail.com' : '',
            password: __DEV__ ? 'TestPassword!12345!' : ''
        };

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {

        if (!this.state.login || !this.state.password){
            Toast.show({
                text: 'You must enter login and password!',
                duration: 2000
            });
            return;
        }

        this.props.login(this.state.login, this.state.password);
    }

    componentDidMount() {
        this.password.setNativeProps({
            text: this.state.password
        });
        // console.log("RRR", this.password);
    }

    render() {
        console.log("NAV 2", this.props.navigation);
        return <Container>
            {
                this.props.authInProgress &&
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    opacity: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Spinner color='green'/>
                </View>
            }

            <Content>
                <Form>
                    <Item rounded>
                        <Input keyboardType='email-address' value={this.state.login} placeholder='Email'
                               onChangeText={text => this.setState({ login: text })}
                        />
                    </Item>
                    <Item rounded>
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
            </Content>
            <Fab
                style={{
                    backgroundColor: 'orange'

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