import React, { Component } from 'react';
import { View, TouchableHighlight } from "react-native";
import { Content, List, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { connect } from "react-redux";
import { getParamsForJournalInfo } from '../helpers/journalNavigation';

class JournalListContainer extends Component {
    render() {
        return (
            <Content>
                <List dataArray={this.props.journals}
                    renderRow={item =>
                        <ListItem onPress={() => this.props.navigation.navigate('_Journal', getParamsForJournalInfo(item))}
                            button icon style={{ backgroundColor: 'transparent' }}>
                            <Left>
                                <Icon name={item.type ? 'md-bookmarks' : 'ios-paper-outline'} />
                            </Left>
                            <Body>
                                <Text>{item.name}</Text>
                            </Body>
                            <Right>
                                <Icon name="ios-arrow-dropright-outline" />
                            </Right>
                        </ListItem>
                    }
                />
            </Content>
        );
    }
}

// <List>
// {this.props.journals.map((j, i) =>

//     <ListItem icon button key={i} onPress={() =>
//         this.props.navigation.navigate('_Journal', { journalId: i })
//     }>
//         <Left>
//             <Icon name="plane" />
//         </Left>
//         <Body>
//             <Text>{j.name}</Text>
//         </Body>
//         <Right />
//     </ListItem>
// )}
// </List>

export default connect(({ journals }) => ({
    journals: journals.get('items').toJS()
}), null)(JournalListContainer);