import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoScreen from './video_screen/VideoScreen';
import videos from './video_screen/videos'; // Assuming you have imported the videos array

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/videos/:id" element={<VideoScreen videos={videos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
