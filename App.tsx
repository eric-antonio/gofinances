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
import { Dashboard } from "./src/screens/Dashboard";


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

      <Dashboard/>

    </ThemeProvider>
  );
}
