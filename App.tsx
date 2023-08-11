import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import {NavigationContainer} from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return SplashScreen;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />

      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>

    </ThemeProvider>
  );
}
