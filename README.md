# Skiddo - Formula 1 Race Tracker

Skiddo is a web application that provides real-time tracking of Formula 1 races. It allows users to view live race data, see driver standings, and look at past race results.

## Features

*   **Live Race Tracking:** View real-time data for ongoing races.
*   **Driver Standings:** See the current standings of all drivers.
*   **Race Schedule:** Browse the schedule for the current F1 season.
*   **Race Details:** View detailed information for each race.
*   **Year Selector:** Look at data from previous F1 seasons.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **WebSockets:** For real-time data streaming.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

### Installation and Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd skiddo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally for preview.