import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components";


export function AppRoutes() {

    const theme = useTheme()
  return (
    <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition:'beside-icon',
            tabBarStyle:{
                height:88,
                paddingVertical: Platform.OS === 'ios'? 20 : 0,
            }
        }}
    >
   

        <Screen 
            name="Listing" 
            component={Dashboard} 
        />

      <Screen 
            name="Register" 
            component={Register} 
        />

      <Screen 
            name="Resume" 
            component={Dashboard} 
        />

    </Navigator>
    
  );
}
