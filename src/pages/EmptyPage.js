import React, { Component } from 'react';
import { View, Text as NativeText, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Button, Text } from 'native-base';

const { loadGists } = require('../actions/test').Creators;

class EmptyPage extends Component {
    render() {
        console.log(this.props);
        return <Container>
            <Header/>
            <NativeText style={{textAlign: 'center'}}>Empty page</NativeText>
            <Button bordered onPress={() => this.props.loadGists()}>
                <Text>Load gists</Text>
            </Button>

            <View>
                {
                    this.props.gists.map(gist => <Text key={gist.id}>{gist.url}</Text>)
                }
            </View>
        </Container>;
    }
}

const mapStateToProps = ({ test }) => ({
    gists: test.get('gists').toArray()
});

export default connect(mapStateToProps, { loadGists })(EmptyPage);