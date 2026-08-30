import { View, Text, StyleSheet } from "react-native";

// This screen lives in the ☰ DRAWER (not the bottom tabs). In Expo Router, that's
// decided purely by where the file sits: app/settings.js, next to the (tabs) group.
export default function Settings() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>⚙️</Text>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.body}>
        You reached this from the drawer menu. The to-do list and About are bottom tabs; this one is a
        drawer screen — two navigation patterns in one app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 28,
    backgroundColor: "#f4f5fb",
  },
  emoji: { fontSize: 40 },
  title: { fontSize: 24, fontWeight: "700", color: "#1f2233" },
  body: { fontSize: 15, color: "#5b6070", textAlign: "center", lineHeight: 22 },
});
