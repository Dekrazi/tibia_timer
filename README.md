# Tibia Timers (Electron desktop app)

A small always-on-top countdown timer utility with two timers (Necklace, Potion),
built to match your screenshot. Each timer speaks its own alert when it finishes:
- **Necklace** → says "ring neck"
- **Potion** → says "drink potion"

## Requirements
- [Node.js](https://nodejs.org) (includes npm) — LTS version is fine.

## Run it (development mode)
1. Open a terminal/PowerShell in this folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the app:
   ```
   npm start
   ```

## Build a standalone Windows .exe (single file, no install needed)
1. Make sure `npm install` has been run (above).
2. Run:
   ```
   npm run dist
   ```
3. Your single portable `.exe` will appear in the `dist/` folder
   (something like `Tibia Timers 1.0.0.exe`). Just double-click it to run —
   no installer, no separate files needed. You can move that one file
   anywhere (Desktop, USB drive, etc.) and it'll still work.



## Features
- **Stay on Top** checkbox — really pins the window above other apps (uses Electron's native `setAlwaysOnTop`).
- **Opacity slider** — really changes the window's transparency (uses Electron's native `setOpacity`).
- **Start/Reset** per timer, countdown display turns red and pulses at 0.
- **Spoken alerts** on completion, using the built-in Chromium speech synthesis (no audio files or internet required).
- **Flash alerts** on completion app will flash red.

