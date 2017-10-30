import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

export default StackNavigator({
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => {
            console.log("_HEADER", navigation);

            return {
                title: 'Journal'
            };
        }
    }
});