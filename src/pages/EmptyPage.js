import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const { loadGists } = require('../actions/test').Creators;

class EmptyPage extends Component {
    render() {
        // console.log("EP", this.props.gists);
        return <View>
            <Text>Page</Text>
            <Button title='Load gists' onPress={() => this.props.loadGists()}/>

            <View>
                {/*{*/}
                    {/*this.props.gists.length > 0 &&*/}
                    {/*this.props.gists.map(gist => <Text key={gist.id}>{gist.url}</Text>)*/}
                {/*}*/}
            </View>
        </View>;
    }
}

const mapStateToProps = ({ test }) => ({
    gists: test.get('gists').toJS()
});

export default connect(mapStateToProps, { loadGists })(EmptyPage);