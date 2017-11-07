// import { List } from 'immutable/dist/immutable-nonambient';
import { } from '../../native-base-theme/components/Right';
import React, { Component } from 'react';
import { View, TouchableHighlight } from "react-native";
import { Content, List, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { connect } from "react-redux";

class JournalListContainer extends Component {
    render() {
        return (
            <Content>
                <List dataArray={this.props.journals}
                    renderRow={item =>
                        <ListItem onPress={() => this.props.navigation.navigate('_Journal', {
                            // title: item.name + ' (' + (item.type ? 'lecture' : 'practice') + ')',
                            journalName: item.name,
                            journalType: item.type,
                            journalId: item.id
                        })}
                            button icon style={{ backgroundColor: 'transparent' }}>
                            <Left>
                                <Icon name={item.type ? 'ios-grid' : 'md-grid'} />
                            </Left>
                            <Body>
                                <Text>{item.name}</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
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