import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

// Each file next to this layout is a screen. Tabs shows one at a time
// and puts a button for each along the bottom. index.js opens first.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#4f46e5" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "700" },
          tabBarActiveTintColor: "#4f46e5",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "My To-Dos",
            tabBarLabel: "To-Dos",
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
    </>
  );
}
