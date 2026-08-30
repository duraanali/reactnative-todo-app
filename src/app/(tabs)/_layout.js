import { Tabs } from "expo-router";
import { Text } from "react-native";

// Inside the drawer's "To-Dos" area, a bottom tab bar with two tabs.
// headerShown is off here because the drawer already draws the top header.
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4f46e5",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "To-Dos",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📝</Text>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>ℹ️</Text>,
        }}
      />
    </Tabs>
  );
}
