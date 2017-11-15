import { StyleSheet } from 'react-native';

const styles = {
    loginBlock: {
        borderTopColor: '#9E9E9E',
        borderTopWidth: 1,
        paddingTop: 6,
        paddingBottom: 10
    }
};

styles.loginBlockCustom = {
    ...styles.loginBlock,

    backgroundColor: 'silver'
};

export default StyleSheet.create(styles);