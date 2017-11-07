import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import { createTitleForJournalData } from '../helpers/journalNavigation';

export default StackNavigator({
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: ({navigation}) => ({headerTitle: createTitleForJournalData(navigation.state.routes[0].routes[0].params)})
    }
});