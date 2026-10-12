# VIT Student Super App — Review 2

A React Native + Expo prototype organized into separate files for GitHub collaboration and later backend integration.

## Included
- Dashboard with student summary, feature cards, and sample announcements
- Student profile screen
- Bottom navigation
- Placeholder screens for Academics and Services
- Centralized sample student data and theme
- Login page (sample credentials are at the top of `src/screens/LoginScreen.tsx`) that opens the dashboard; Log Out is on the Profile screen

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP and open the folder in VS Code.
3. In the terminal, run `npm install`.
4. Run `npx expo start`.
5. Scan the QR code with Expo Go, or use the available emulator option.

## Where to edit
- `src/screens/LoginScreen.tsx` — login page
- `src/screens/DashboardScreen.tsx` — dashboard
- `src/screens/ProfileScreen.tsx` — profile
- `src/components/` — reusable UI components
- `src/data/studentData.ts` — sample student details and announcements
- `src/theme.ts` — colors

## Backend integration notes
- Replace the sample values in `src/data/studentData.ts` with data from your API.
- Keep API calls in a separate service module when backend endpoints are ready.
- Student name and day-scholar/hosteller status should come from the authenticated student's database record, not be inferred from the registration number.
- Attendance is display-only in this prototype.
- The VIT-style text mark in the header is a placeholder; replace it with an approved VIT logo asset if your team has one.

## Important
This is a UI prototype and contains sample data only. It is not an official VIT application and is not connected to VIT systems.
