import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import styles from '../styles/components';

export default class FullScreenLoader extends Component {
    render() {
        if (!this.props.isVisible) return null;
        return <View style={[styles.fullScreenLoader, { backgroundColor: this.props.backgroundColor }]}>
            <Spinner color={this.props.spinnerColor} />
        </View>;
    }
}

FullScreenLoader.defaultProps = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    spinnerColor: '#03A9F4',
    isVisible: false
};