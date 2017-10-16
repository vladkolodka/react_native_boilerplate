import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Button, Keyboard } from 'react-native';
import { Toast } from 'native-base';

const { setApiUrl } = require('../actions/commonActions').Creators;

class AppSettingsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: props.apiUrl
        };

        this.onSave = this.onSave.bind(this);
    }

    onSave(){
        if(!this.state.url){
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
                onChangeText={text => this.setState({url: text})}
            />

            <Button title='Save' onPress={this.onSave}/>
        </View>;
    }
}

const mapStateToProps = ({ auth }) => ({
    apiUrl: auth.get('apiUrl')
});

export default connect(mapStateToProps, { setApiUrl })(AppSettingsPage);