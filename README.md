# rn-todo — a basic To-Do app (React Native + Expo)

The class starter for one React Native lesson. Students already know React. This app is the same ideas — state, events, lists — drawn with native components instead of HTML.

Made with Expo. Screens are files in `src/app/`.

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

## The files

```text
src/app/_layout.js   → the navigator. A bottom tab for each screen.
src/app/index.js     → the to-do list. Opens first.
src/app/about.js     → the second tab.
```

`_layout.js` is the shell around the screens. Each other file in `src/app/` is one screen, and each `<Tabs.Screen>` is one button on the bar. Tapping a tab shows that screen. `index.js` is the screen that opens first.

## What is new, coming from React on the web

- **No HTML.** `View` is the box. Every word on screen goes inside `Text`. `TextInput` is the field. `Pressable` is the button.
- **State is the same.** `useState`, then `addTodo` / `toggle` / `remove` update the list immutably (`.map`, `.filter`, spread).
- **`FlatList` draws the rows.** You pass `data` and a `renderItem`, the way you would `.map()` an array in React.
- **No CSS file.** `StyleSheet.create({ ... })` uses camelCase names, and numbers are pixels. Flexbox lays out downward until a style sets `flexDirection: "row"`.
- **Navigation is a layout, not a router library you wire by hand.** The file name is the screen name (`index`, `about`). The tab bar switches which file is on screen.

## Your turn

1. Change the colors (the indigo is `#4f46e5`) and the tab titles.
2. Add a third tab: create `src/app/done.js` and add a `<Tabs.Screen name="done" ... />` in `_layout.js`.
3. Add a "clear completed" button that removes every done task.
