# Quantra Mobile App - Setup Guide

## Quick Start

This guide will help you set up and run the Quantra mobile application locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

For mobile development, you'll also need:
- **Expo Go** app on your mobile device (iOS/Android)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Weath123/Quantra---Mobile-App.git
cd Quantra---Mobile-App
```

### 2. Pull Latest Information

Make sure you have the latest code:

```bash
git pull origin main
```

### 3. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

## Running the Application

### Start the Development Server

```bash
npm start
```

This will:
1. Start the Expo development server
2. Open Expo Dev Tools in your browser
3. Display a QR code

### Run on Your Device

#### Option 1: Physical Device (Recommended for testing)

1. Install **Expo Go** app on your phone
2. Scan the QR code from the terminal or browser
   - **iOS**: Use the Camera app
   - **Android**: Use the Expo Go app scanner
3. The app will load and run on your device

#### Option 2: Emulator/Simulator

**Android Emulator:**
```bash
npm run android
```

**iOS Simulator (Mac only):**
```bash
npm run ios
```

**Web Browser:**
```bash
npm run web
```

## Features to Test

Once the app is running, you can test these features:

1. **Automatic Data Pull**: The app automatically pulls information when it loads
2. **Manual Pull**: Tap the "Pull Latest Information" button
3. **Pull-to-Refresh**: Swipe down on the list to refresh data
4. **View Data**: See the pulled information displayed in cards

## Troubleshooting

### Port Already in Use

If you get a port error, you can specify a different port:
```bash
npx expo start --port 19001
```

### Clear Cache

If you encounter issues, try clearing the cache:
```bash
npx expo start -c
```

### Module Not Found

If you see "Module not found" errors:
```bash
rm -rf node_modules
npm install
```

## Customizing the Data Source

To connect to your own backend API:

1. Open `src/services/dataService.js`
2. Change the `API_BASE_URL` constant:

```javascript
const API_BASE_URL = 'https://your-api-endpoint.com';
```

3. Update the endpoint paths in the pull functions as needed

## Project Structure

```
Quantra---Mobile-App/
├── App.js                      # Main application component
├── index.js                    # Entry point
├── package.json                # Dependencies and scripts
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
├── README.md                   # Project overview
├── SETUP.md                    # This file
└── src/
    ├── components/
    │   └── DataCard.js         # Reusable data display component
    ├── services/
    │   └── dataService.js      # API integration for pulling data
    └── utils/
        └── storage.js          # Caching utilities
```

## Next Steps

After getting the app running:

1. Explore the codebase
2. Customize the API endpoints
3. Add your own components
4. Implement additional features for contractors and SMB management

## Getting Help

If you encounter issues:

1. Check the [Expo Documentation](https://docs.expo.dev/)
2. Review the [React Native Docs](https://reactnative.dev/docs/getting-started)
3. Open an issue on GitHub

## Development Workflow

### Pull Latest Changes

Always pull the latest changes before starting work:

```bash
git pull origin main
```

### Making Changes

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Commit and push your changes

### Keep Dependencies Updated

Periodically update dependencies:

```bash
npm update
```

## Production Build

For production builds, refer to the [Expo Build Documentation](https://docs.expo.dev/build/introduction/).

---

Happy coding! 🚀
