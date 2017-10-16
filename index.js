import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { configureStore } from './src/configureStore';
const { startup } = require('./src/actions/commonActions').Creators;
import { Root, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

class AppWithStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInitialized: false
        };

        this.onPersistDataLoaded = this.onPersistDataLoaded.bind(this);

        this.store = configureStore({}, this.onPersistDataLoaded);
    }

    onPersistDataLoaded() {
        this.store.dispatch(startup());

        this.setState({ isInitialized: true });
        // TODO hide splash screen
    }

    render() {
        if (this.state.isInitialized === false) return null;
        return <Provider store={this.store}>
            <Root>
                <StyleProvider style={getTheme(material)}>
                    <App />
                </StyleProvider>
            </Root>
        </Provider>;
    }
}

AppRegistry.registerComponent('djournal', () => AppWithStore);
