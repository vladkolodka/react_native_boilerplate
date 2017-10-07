import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DrawerPaneContainer extends Component {
    constructor(props) {
        super(props);

        props.navigation.navigate("DrawerOpen");
    }

    render() {
        const { items } = this.props;
        const { lections } = this.props.screenProps;

        return <View style={{backgroundColor: 'gray', flex: 1}}>
            <Text>Drawer panel</Text>

            {items.map((item, index) => {
                if (item.key === 'Lections') return;
                return <Text key={index}>{item.key}</Text>;
            })}

            {lections.map((item, index) => {
                if (item.key === 'Lections') return;
                return <Button key={index} title={'Lection' + item}
                               onPress={() => this.props.navigation.navigate('Lections', { id: item })}/>;
            })}
        </View>;
    }
}