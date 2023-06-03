import * as React from 'react'
import { ImageBackground } from 'react-native'
import { styled } from 'nativewind'

import Stripes from '../src/assets/stripes.svg'
import blurBg from '../src/assets/bg-blur.png'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import Toast from 'react-native-toast-message'

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <>
      <ImageBackground
        source={blurBg}
        className="relative flex-1 bg-gray-900"
        imageStyle={{ position: 'absolute', left: '-100%' }}
      >
        <StyledStripes className="absolute left-2" />

        <StatusBar style="light" translucent />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="new" />
          <Stack.Screen name="memories" />
        </Stack>
      </ImageBackground>
      <Toast />
    </>
  )
}
