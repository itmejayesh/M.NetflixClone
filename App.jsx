import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ComingSoonScreen from './screens/ComingSoonScreen';
import SearchScreen from './screens/SearchScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 5 : size - 5;
            } else if (route.name === 'Comming Soon') {
              iconName = focused ? 'bookmarks-sharp' : 'bookmarks-outline';
              size = focused ? size + 5 : size - 5;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
              size = focused ? size + 5 : size - 5;
            } else if (route.name === 'Download') {
              iconName = focused ? 'download' : 'download-outline';
              size = focused ? size + 5 : size - 5;
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Comming Soon" component={ComingSoonScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Download" component={DownloadsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
