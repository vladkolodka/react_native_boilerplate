import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

export default StackNavigator({
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => {

            const params = navigation.state.routes[0].routes[0].params;


            return {
                headerTitle: params == null ? '' : (params.journalName + ' (' + (params.journalType ? 'lecture' : 'practice') + ')')
                // headerTitle: (navigation.state.routes[0].routes[0].params || {}).title
            };
        }
    }
});