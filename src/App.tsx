import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppProvider} from './App.provider';
import BottomTabsNavigator from './screens/BottomTabs';
import {Platform, UIManager} from 'react-native';

const App: React.FC = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
