import { View, Text, StyleSheet } from "react-native";

// The second bottom tab. Just a component that returns a View with some Text.
export default function About() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>ℹ️</Text>
      <Text style={styles.title}>About</Text>
      <Text style={styles.body}>
        A tiny to-do app built with Expo Router. This is the second bottom tab — open the ☰ drawer
        (top-left) to find the Settings screen too.
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
