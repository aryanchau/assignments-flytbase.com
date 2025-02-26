This React application simulates the motion of multiple drones on a map using time-series latitude and longitude data. It allows users to input flight paths manually or by uploading JSON files, and provides controls to start, pause, and seek through the simulation timeline.

This is folder structure
drone-simulator-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DroneMap.js         # Renders the map and animates drone motion
│   │   ├── FileInput.js        # Handles JSON file uploads for drone paths
│   │   ├── PathInput.js        # Manual input for drone paths
│   │   ├── ControlPanel.js     # Simulation control buttons (Play, Pause, Reset)
│   │   └── SeekBar.js          # Timeline seek bar for simulation progress
│   ├── App.js                  # Main application component
│   ├── index.js                # React DOM rendering entry point
│   └── styles.css              # Custom styles for the application
├── package.json                # Project dependencies and scripts
└── tailwind.config.js           # Tailwind CSS configuration


Installation

git clone <repository-url>
cd my-app
npm install i
npm start
   


*For now json input is not working , ypu can enter the lat, long and see the results.*

Dependencies:

React
React Leaflet
Leaflet
Tailwind CSS


License

This project is licensed under the MIT License.