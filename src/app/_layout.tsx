import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import 'react-native-reanimated';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@/tamagui.config'
import { Stack } from 'expo-router';


export default function RootLayout() {
  

  return (
    <>
    {/* <TamaguiProvider config={tamaguiConfig}> */}
        <StatusBar style="auto" />
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name='(tabs)'/>
        </Stack>
        {/* </TamaguiProvider> */}
        </>
  );
}
