# Quantra - Mobile App

Quantra - Mobile and AI First Business Management Application designed for Contractors and SMB alike.

## Features

- **Pull/Fetch Information**: The app automatically pulls and displays information from the backend
- **Pull-to-Refresh**: Swipe down to manually refresh and pull latest data
- **Cross-Platform**: Built with React Native and Expo for iOS, Android, and Web

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Weath123/Quantra---Mobile-App.git
cd Quantra---Mobile-App
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

This will open Expo Dev Tools in your browser. You can then:
- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator
- Scan the QR code with Expo Go app on your physical device

## Pulling Information

The app includes functionality to pull/fetch information from a backend API:

- **Automatic Pull**: Information is automatically pulled when the app loads
- **Manual Pull**: Tap the "Pull Latest Information" button
- **Pull-to-Refresh**: Swipe down on the list to refresh data

The data fetching logic is implemented in `App.js` using axios for HTTP requests.

## Project Structure

```
.
├── App.js              # Main application component with data pulling logic
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
├── index.js            # Entry point
├── babel.config.js     # Babel configuration
└── README.md           # This file
```

## Customization

To connect to your own backend API:

1. Open `App.js`
2. Replace the API endpoint in the `pullInformation` function:
```javascript
const response = await axios.get('YOUR_API_ENDPOINT_HERE');
```

## Technology Stack

- React Native
- Expo
- Axios (for HTTP requests)
- React Hooks (useState, useEffect)

## License

This project is private and proprietary.
