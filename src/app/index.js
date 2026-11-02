import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";

// No HTML here. View is the box, Text is the only way to show words,
// TextInput is the field, Pressable is the button, FlatList is the list.
export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn React Native", done: true },
    { id: "2", text: "Build a to-do app", done: false },
  ]);

  const addTodo = () => {
    const value = text.trim();
    if (!value) return;
    setTodos([{ id: Date.now().toString(), text: value, done: false }, ...todos]);
    setText("");
  };

  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remove = (id) => setTodos(todos.filter((t) => t.id !== id));

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <View style={styles.screen}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a task…"
          placeholderTextColor="#9aa0b4"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <Pressable style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.count}>{remaining} left to do</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Nothing yet — add your first task!</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable style={styles.cardLeft} onPress={() => toggle(item.id)}>
              <View style={[styles.checkbox, item.done && styles.checkboxDone]}>
                {item.done && <Text style={styles.check}>✓</Text>}
              </View>
              <Text style={[styles.itemText, item.done && styles.itemTextDone]}>
                {item.text}
              </Text>
            </Pressable>
            <Pressable onPress={() => remove(item.id)} hitSlop={10}>
              <Text style={styles.delete}>✕</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

// No CSS file. Names are camelCase, numbers are density-independent pixels,
// and flexbox runs down the screen until you set flexDirection: "row".
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#f4f5fb",
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 16,
  },

  inputRow: { flexDirection: "row", gap: 10 },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e3e5ef",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1f2233",
  },
  addButton: {
    backgroundColor: "#4f46e5",
    borderRadius: 14,
    paddingHorizontal: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: { color: "#ffffff", fontWeight: "700", fontSize: 16 },

  count: {
    color: "#6b7086",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  list: { gap: 12, paddingBottom: 28 },
  empty: { textAlign: "center", color: "#8a8fa3", marginTop: 48, fontSize: 15 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: "#1f2233",
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardLeft: { flexDirection: "row", alignItems: "center", gap: 14, flex: 1 },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#c7cad8",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxDone: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  check: { color: "#ffffff", fontSize: 15, fontWeight: "800" },
  itemText: { fontSize: 16, color: "#1f2233", flexShrink: 1 },
  itemTextDone: { textDecorationLine: "line-through", color: "#a3a7b8" },
  delete: { color: "#c7cad8", fontSize: 18, fontWeight: "700", paddingLeft: 10 },
});
