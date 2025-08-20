# 📒 Notes App (React Native + Expo)

A simple Notes application built with **React Native** and **Expo Router**.  
This project is part of my learning journey, but it’s also structured as a small portfolio app.

---

## ✨ Features

- Add notes with a text input and button
- Display notes in a list (`FlatList`)
- Store notes locally using **AsyncStorage** so they persist after closing the app
- Delete notes with a single tap
- _(Optional)_ Mark notes as completed (strike-through style)
- _(Optional)_ Dark/Light mode toggle

---

## 🚀 Tech Stack

- [Expo](https://expo.dev/) (with Expo Router)
- [React Native](https://reactnative.dev/)
- AsyncStorage for local storage

---

## 📂 Project Structure

app/
├─ \_layout.tsx → Main layout for navigation
├─ index.tsx → Home screen (input + notes list)

---

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:

   ```
   npx expo start
   ```

4. Open it on your phone using the Expo Go app, or on an emulator.

📝 Practice Goals

This project is built to strengthen my React Native & Expo basics:

-State management
-List rendering with FlatList
-Local persistence with AsyncStorage
-Navigation with Expo Router
-Styling for both light and dark themes

📌 Future Improvements

-Edit notes
-Categorize notes
-Sync with a backend (Firebase / Supabase)
-Share notes