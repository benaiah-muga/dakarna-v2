
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Keep for header icons

import { Colors } from '@/constants/theme';

const CustomTabItem = ({ color, focused, label }: { color: string, focused: boolean, label: string }) => {
  return (
    <View style={styles.tabItemContainer}>
      {focused && <View style={styles.activeIndicator} />}
      <Text style={[styles.tabLabel, { color: color }]}>{label}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ 
        tabBarActiveTintColor: Colors.bakery.orange,
        tabBarInactiveTintColor: Colors.bakery.gray,
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false, // Disable default label
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => <CustomTabItem color={color} focused={focused} label="Home" />,
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Ionicons name="menu" size={30} color={Colors.bakery.white} style={{ marginLeft: 20 }} />,
          headerRight: () => <Ionicons name="search" size={26} color={Colors.bakery.white} style={{ marginRight: 20 }} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => <CustomTabItem color={color} focused={focused} label="Menu" />,
          headerShown: true,
          headerTitle: 'Menu',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.bakery.darktext,
          },
          headerLeft: () => <Ionicons name="menu" size={30} color={Colors.bakery.darktext} style={{ marginLeft: 20 }} />,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.bakery.cream,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => <CustomTabItem color={color} focused={focused} label="Cart" />,
          headerShown: true,
          headerTitle: 'My Cart',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.bakery.darktext,
          },
          headerLeft: () => <Ionicons name="menu" size={30} color={Colors.bakery.darktext} style={{ marginLeft: 20 }} />,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.bakery.cream,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => <CustomTabItem color={color} focused={focused} label="About" />,
          headerShown: true,
          headerTitle: 'About Us',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.bakery.darktext,
          },
          headerLeft: () => <Ionicons name="arrow-back" size={24} color={Colors.bakery.darktext} style={{ marginLeft: 20 }} onPress={() => navigation.navigate('index')} />,
          headerStyle: {
            backgroundColor: Colors.bakery.cream,
            shadowOpacity: 0,
            elevation: 0,
          },
        })}
      />
      <Tabs.Screen
        name="profile"
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => <CustomTabItem color={color} focused={focused} label="Profile" />,
          headerShown: true,
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.bakery.darktext,
          },
          headerLeft: () => <Ionicons name="arrow-back" size={24} color={Colors.bakery.darktext} style={{ marginLeft: 20 }} onPress={() => navigation.navigate('index')} />,
          headerStyle: {
            backgroundColor: Colors.bakery.white,
            shadowOpacity: 0,
            elevation: 0,
          },
        })}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.bakery.white,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    height: 65, // Adjusted height for text-only
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeIndicator: {
    position: 'absolute',
    width: 70,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.bakery.lightPeach,
  },
});
