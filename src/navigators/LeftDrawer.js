import { DrawerNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import LectionsPage from '../pages/LectionsPage';
import DrawerPaneContainer from '../components/DrawerPaneContainer';

export default DrawerNavigator({
    EmptyPage: { screen: EmptyPage },
    Lections: { screen: LectionsPage, path: 'lections/:id' }
}, {
    contentComponent: DrawerPaneContainer
});