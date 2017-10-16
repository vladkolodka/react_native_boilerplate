import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import DrawerPaneComponent from '../components/DrawerPaneComponent';

export default DrawerNavigator({
    Empty: { screen: EmptyPage }
}, {
        contentComponent: DrawerPaneComponent,
        drawerWidth: 300
    }
);