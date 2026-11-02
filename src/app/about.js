import { View, Text, StyleSheet } from "react-native";

// The second tab. Same kind of screen as the list: a component that returns Views and Text.
export default function About() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>ℹ️</Text>
      <Text style={styles.title}>About</Text>
      <Text style={styles.body}>
        This screen is the other bottom tab. The list of tasks lives on To-Dos. Both are registered in
        src/app/_layout.js.
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
  body: { fontSize: 15, color: "#5b6070", textAlign: "center", lineHeight: 22, maxWidth: 320 },
});
