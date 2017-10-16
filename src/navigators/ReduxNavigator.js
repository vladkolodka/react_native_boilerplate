import { StackNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';

export default StackNavigator({
    Root: { screen: LoginNavigator }
}, {
        navigationOptions: {
            header: null
        }
    });

export function createReduxNavigator(authState) {

}