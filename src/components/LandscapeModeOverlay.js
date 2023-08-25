import React from 'react';
import '../LandscapeModeOverlay.css'; // Import the CSS for styling

const LandscapeModeOverlay = ({ show }) => {
    if (!show) {
        return null;
    }
        return (
            <div className="overlay p-4">

                The website is available on Portrait mode!
            </div>
        );
};

export default LandscapeModeOverlay;
