# Music Track Application

## Overview

The Music Track Application is a React-based frontend that allows users to search for music tracks using their ISRC codes. The application interacts with a REST API to create and retrieve track metadata, displaying essential details and cover images for each track.

## Features

- **Search for Music Tracks**: Users can input ISRC codes to create or fetch track metadata.
- **Track Metadata Display**: Shows track name, artist name, album name, explicit content indicator, playback seconds, and cover images.
- **Error Handling**: Provides user feedback for errors and successful actions.
- **Responsive Design**: Optimized for various devices (desktop, tablet, mobile).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development server and build tool.
- **Styled Components**: CSS-in-JS for styling components.
- **React Router**: For navigation within the application.
- **Axios**: For making HTTP requests to the backend API.

## API Endpoints

- **Create Track**:
  `POST http://localhost:8080/codechallenge/createTrack?isrc=ISRC_CODE`
  Creates a new track record using the provided ISRC code.

- **Get Track Metadata**:
  `GET http://localhost:8080/codechallenge/getTrackMetadata?isrc=ISRC_CODE`
  Retrieves metadata for an existing track using the provided ISRC code.

- **Get Cover Image**:
  `GET http://localhost:8080/codechallenge/getCover?isrc=ISRC_CODE`
  Fetches the cover image for the track.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/music-track-app.git
   cd music-track-app

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open your browser and navigate to http://localhost:3000 to access the application.
