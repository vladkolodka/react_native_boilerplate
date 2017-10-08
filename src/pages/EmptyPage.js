import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header } from 'native-base';

const { loadGists } = require('../actions/test').Creators;

class EmptyPage extends Component {
    render() {
        // console.log("EP", this.props.gists);
        return <Container>
            <Header/>
            <Text>Page</Text>
            <Button title='Load gists' onPress={() => this.props.loadGists()}/>

            <View>
                {/*{*/}
                    {/*this.props.gists.length > 0 &&*/}
                    {/*this.props.gists.map(gist => <Text key={gist.id}>{gist.url}</Text>)*/}
                {/*}*/}
            </View>
        </Container>;
    }
}

const mapStateToProps = ({ test }) => ({
    gists: test.get('gists').toJS()
});

export default connect(mapStateToProps, { loadGists })(EmptyPage);