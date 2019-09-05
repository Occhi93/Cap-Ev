import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import CondServYPriv from './screens/CondServYPriv';
import MenuPrincipal from './screens/MenuPrincipal';
import RecEvi from './screens/RecEvi';
import {DrawerNavigator, DrawerItems} from 'react-navigation'


//  Aqui van todas las pantallas que se van a utilizar
const AppNavigator = createStackNavigator(
  {
  CondServYPriv: CondServYPriv,
  MenuPrincipal: MenuPrincipal,
  RecEvi: RecEvi,
},
{
  initialRouteName: 'CondServYPriv',
  defaultNavigationOptions: {
    title: 'CapEv',
    headerStyle: {
      backgroundColor: '#0000FF',
    },
    headerTitleStyle: {
      color: '#00FF00'
    },
  }
}
);
//  const customDrawerContentComponent = (props) => {
//    <Content>
//      <DrawerItems {...props}/>
//    </Content>
//  }

// const AppNavigator = createDrawerNavigator ({
//   MenuPrincipal: {screen: MenuPrincipal},
//   CondServYPriv: { screen: CondServYPriv }
// },
// {
//   initialRouteName: 'MenuPrincipal',
//   contentComponent: customDrawerContentComponent,
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle'
// })

const App = createAppContainer(AppNavigator);

export default App