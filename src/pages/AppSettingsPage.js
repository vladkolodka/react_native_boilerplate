import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Button as NativeButton, Keyboard } from 'react-native';
import { Toast } from 'native-base';
import { Header, Title, Body, Left, Icon, Button, Right } from 'native-base';
import localization from '../localization';

const { setApiUrl } = require('../actions/commonActions').Creators;

class AppSettingsPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>
                    {localization.settings}
                </Title>
            </Body>
            <Right />
        </Header>
    });

    constructor(props) {
        super(props);

        this.state = {
            url: props.apiUrl
        };

        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        if (!this.state.url) {
            Toast.show({
                duration: 2000,
                text: 'Api url should not be empty!'
            });
            return;
        }

        Keyboard.dismiss();
        this.props.setApiUrl(this.state.url);
        Toast.show({
            duration: 2000,
            text: 'New api url saved.'
        });
    }

    render() {
        return <View>
            <TextInput
                placeholder='Api url'
                value={this.state.url}
                onChangeText={text => this.setState({ url: text })}
            />

            <NativeButton title='Save' onPress={this.onSave} />
        </View>;
    }
}

const mapStateToProps = ({ auth }) => ({
    apiUrl: auth.get('apiUrl')
});

export default connect(mapStateToProps, { setApiUrl })(AppSettingsPage);