import { DrawerNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import LectionsPage from '../pages/LectionsPage';
import DrawerPaneComponent from '../components/DrawerPaneComponent';

export default DrawerNavigator({
    EmptyPage: { screen: EmptyPage },
    Lections: { screen: LectionsPage, path: 'lections/:id' }
}, {
    contentComponent: DrawerPaneComponent
});