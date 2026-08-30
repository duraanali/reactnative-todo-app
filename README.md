# rn-todo — a basic To-Do app (React Native + Expo)

The class starter for the React Native crash course. Made with the real
`npx create-expo-app@latest` scaffold (latest SDK), which uses **Expo Router** — so your screens are
**files** in the `app/` folder, and `_layout` is the shell around them.

## Run it (Mac or Windows)

You need **Node.js** on your laptop and the free **Expo Go** app on your phone.

```bash
npm install
npx expo start
```

Scan the QR code:

- **iPhone** — open the Camera app and point it at the QR code.
- **Android** — open the **Expo Go** app and scan from there.

Laptop and phone must be on the **same Wi-Fi**. The app reloads on every save.

> Want a quick look in your computer's browser? Run `npm run web`.

## How it's built — Expo Router layouts (a drawer + bottom tabs)

Screens are **files** in `src/app/`, and `_layout` files are the **shell** around them. This app uses
**both** a drawer and bottom tabs, just by how the files are arranged:

```text
src/app/_layout.js         → a Drawer (☰ side menu): "To-Dos" and "Settings"
src/app/(tabs)/_layout.js  → Tabs (bottom bar): "To-Dos" and "About"
src/app/(tabs)/index.js    → the to-do list   (📝 To-Dos tab)
src/app/(tabs)/about.js    → the About screen (ℹ️ About tab)
src/app/settings.js        → a drawer-only screen
```

- The **Drawer** is the outer shell — tap ☰ to open it. One item is the tabbed area, the other is Settings.
- The **Tabs** live inside the `(tabs)` group — a bottom bar to switch the to-do list and About.
- A file's **location decides its navigation**: put a screen inside `(tabs)/` and it's a tab; put it beside
  the group and it's a drawer screen. Swap `Stack` / `Tabs` / `Drawer` in a `_layout` to change the shell.

## The pieces to notice

- **Building blocks** — `View`, `Text`, `TextInput`, `Pressable`, `FlatList`.
- **State** — plain `useState`: `todos`, and `addTodo` / `toggle` / `remove` update it immutably (`.map`,
  `.filter`, spread) — exactly like React on the web.
- **Styling** — `StyleSheet.create({ ... })`: camelCase names, numbers are pixels, flexbox by default.

## Your turn

1. Change the colors (the indigo is `#4f46e5`) and the header titles.
2. Add a **third tab**: create `src/app/(tabs)/done.js` and add a `<Tabs.Screen name="done" ... />` to the
   tabs layout.
3. Add a "clear completed" button that removes every done task.
