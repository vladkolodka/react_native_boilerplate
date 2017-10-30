import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import JournalPage from '../pages/JournalPage';
import DrawerPaneComponent from '../components/DrawerPaneComponent';

export default DrawerNavigator({
    _Journal: { screen: JournalPage }
}, {
        contentComponent: DrawerPaneComponent,
        drawerWidth: 300
    }
);