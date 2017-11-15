import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

export default StackNavigator({
    Drawer: {
        screen: DrawerNavigator,
    }
});