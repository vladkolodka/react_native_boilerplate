import React, { Component } from 'react';
import { Text as NativeText, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Container, Header, Text } from 'native-base';

const { loadGists } = require('../actions/test').Creators;

class EmptyPage extends Component {
    render() {
        console.log(this.props);
        return <Container>
            <Header/>
            <NativeText style={{ textAlign: 'center' }}>Empty page</NativeText>
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