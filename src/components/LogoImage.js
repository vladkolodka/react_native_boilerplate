import React from 'react';
import { View } from "react-native";
import { Content, H1 } from 'native-base';
import styles from '../styles/components';

export default LogoImage = () => {
    return <Content>
        <View style={styles.logoImageWrapper}>
            <H1>Logo</H1>
        </View>
    </Content>;
};