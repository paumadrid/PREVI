import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ChatListScreen from "./screens/ChatListScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#222",
          height: 70,
          paddingBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Perfiles"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensajes"
        component={ChatListScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-text" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mi Perfil"
        component={MyProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
