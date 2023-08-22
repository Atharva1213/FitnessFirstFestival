import React from 'react';
import '../LandscapeModeOverlay.css'; // Import the CSS for styling

const LandscapeModeOverlay = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="overlay">
      Please use portrait mode to view this site.
    </div>
  );
};

export default LandscapeModeOverlay;
