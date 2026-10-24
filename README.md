# Pocket Budget

A simple budget and expense tracker that runs in the browser and installs like an app on Android, iPhone and computers.

**Open it:** https://chandra11743.github.io/pocket-budget/

## What it does

- Add expenses in a couple of taps, with your own categories (and types inside them, like Breakfast / Lunch / Dinner).
- Set a monthly income and budgets. See what's left to spend, your daily pace, a calendar and charts.
- Optional: note how you paid (cash, bank card, e-wallet, credit card). Credit cards can track bills and instalments.
- Optional: track bank balances. If you don't, the budget does the maths.
- Keep track of money lent to or borrowed from friends.
- Works offline.

## Your data

- Everything is saved on your own device first.
- If you **Sign in with Google**, a copy is saved in a hidden app folder in **your own** Google Drive, so you can use the app on more than one device and restore it on a new phone.
- The app only asks for the `drive.appdata` permission. It can see the one file it creates and nothing else in your Drive. Nobody else can see that file, including whoever made or hosts the app.
- There is no server and no account with us. The app talks to Google directly from your device.
- Settings → Sync → More → "Delete my data from Google Drive" removes the file. Signing out keeps the data on your device.

## Install on your phone

- **Android (Chrome):** open the link, then tap **Install app** (or ⋮ → Add to Home screen).
- **iPhone (Safari):** open the link, tap Share → **Add to Home Screen**.

## Files

`index.html` is the whole app. `sw.js` makes it work offline. `manifest.webmanifest` and the icons make it installable. `privacy.html` is the privacy notice.
