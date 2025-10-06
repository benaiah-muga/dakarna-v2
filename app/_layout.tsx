import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="product/[id]" 
        options={{ 
          headerShown: false, // We will configure the header inside the screen file
          presentation: 'modal', // Optional: for a nice slide-up effect
        }} 
      />
    </Stack>
  );
}