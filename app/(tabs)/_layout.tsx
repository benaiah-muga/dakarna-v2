
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';

const CustomTabItem = ({ focused, label, iconName }: { focused: boolean, label: string, iconName: string }) => {
  const color = focused ? Colors.bakery.orange : Colors.bakery.gray;
  const icon = focused ? iconName : `${iconName}-outline`;

  return (
    <View style={styles.tabItemContainer}>
      <Ionicons name={icon as any} size={24} color={color} />
      <Text style={[styles.tabLabel, { color: color }]}>{label}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false, // Disable default label
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <CustomTabItem focused={focused} label="Home" iconName="home" />,
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Ionicons name="menu" size={30} color={Colors.bakery.white} style={{ marginLeft: 20 }} />,
          headerRight: () => <Ionicons name="search" size={26} color={Colors.bakery.white} style={{ marginRight: 20 }} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => <CustomTabItem focused={focused} label="Menu" iconName="grid" />,
          headerShown: true,
          headerTitle: 'Menu',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.bakery.darktext,
          },
          headerLeft: () => <Ionicons name="arrow-back" size={24} color={Colors.bakery.darktext} style={{ marginLeft: 20 }} onPress={() => navigation.goBack()} />,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.bakery.cream,
            shadowOpacity: 0,
            elevation: 0,
          },
        })}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => <CustomTabItem focused={focused} label="Cart" iconName="cart" />,
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
          tabBarIcon: ({ focused }) => <CustomTabItem focused={focused} label="About" iconName="information-circle" />,
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
          tabBarIcon: ({ focused }) => <CustomTabItem focused={focused} label="Profile" iconName="person" />,
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
    height: 85, // Adjusted height for icon and text
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
  },
});
