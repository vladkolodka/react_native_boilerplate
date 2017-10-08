import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import LectionsPage from '../pages/LectionsPage';
import DrawerPaneComponent from '../components/DrawerPaneComponent';

export default DrawerNavigator({
    EmptyPage: { screen: EmptyPage },
    Lections: { screen: data => <LectionsPage initialId={3} {...data} /> }
}, {
    contentComponent: DrawerPaneComponent,
    drawerWidth: 300,
    initialRouteName: 'Lections'
});