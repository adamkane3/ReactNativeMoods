import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Analytics from './Analytics';
import History from './History';
import Home from './Home';

const BottomTabs = createMaterialBottomTabNavigator();

const BottomTabsNavigator: React.FC = props => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
