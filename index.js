import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { configureStore } from './src/configureStore';
const { startup } = require('./src/actions/commonActions').Creators;

class AppWithStore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded: false
        };

        this.onPersistDataLoaded = this.onPersistDataLoaded.bind(this);

        this.store = configureStore({}, this.onPersistDataLoaded);
    }

    onPersistDataLoaded() {
        this.store.dispatch(startup());

        this.setState({ dataLoaded: true });
        // TODO hide splash screen
    }

    render() {
        if(this.state.dataLoaded === false) return null;
        return <Provider store={this.store}>
            <App />
            {/*<LeftDrawer parentNav={{ff: 'tt'}} screenProps={{lections: [1, 2, 3]}} />*/}
        </Provider>;
    }
}

AppRegistry.registerComponent('djournal', () => AppWithStore);
