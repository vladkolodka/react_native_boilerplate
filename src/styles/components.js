import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fullScreenLoader: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        elevation: 9,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});