import { Stack } from 'expo-router';
import React from 'react';
import { CartProvider } from '../context/CartContext';
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <CartProvider>
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
      <Toast />
    </CartProvider>
  );
}