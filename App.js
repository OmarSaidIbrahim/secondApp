import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/HomeScreen'
import Prossimamente from './screens/Prossimamente'
import Cerca from './screens/Cerca'
import Download from './screens/Download'
import Altro from './screens/Altro'

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Prossimamente') {
                  iconName = focused ? 'copy' : 'copy-outline';
                }
                else if (route.name === 'Cerca') {
                  iconName = focused ? 'search' : 'search-outline';
                }
                else if (route.name === 'Download') {
                  iconName = focused ? 'download' : 'download-outline';
                }
                else if (route.name === 'Altro') {
                  iconName = focused ? 'menu' : 'menu-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              style: {backgroundColor: "black", borderTopWidth:0},
              
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cerca" component={Cerca} />
            <Tab.Screen name="Prossimamente" component={Prossimamente}/>
            <Tab.Screen name="Download" component={Download}/>
            <Tab.Screen name="Altro" component={Altro}/>
            
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position:"absolute",
    top:0,
    left:0,
    right:0,
    height:70,
    backgroundColor:"red",
    elevation:4,
  }
});

export default App;