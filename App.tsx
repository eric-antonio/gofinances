import React from 'react';
import {ThemeProvider} from 'styled-components';

import {
  useFonts,
  

} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dasboard';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
    
  )
}

