import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// The ROOT layout is a Drawer — the ☰ side menu. It has two items:
//   • "(tabs)"   → the tabbed area (which has its own bottom tabs)
//   • "settings" → a plain screen that only lives in the drawer
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#4f46e5" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "700" },
          drawerActiveTintColor: "#4f46e5",
        }}
      >
        <Drawer.Screen name="(tabs)" options={{ title: "My To-Dos", drawerLabel: "To-Dos" }} />
        <Drawer.Screen name="settings" options={{ title: "Settings", drawerLabel: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
