import React from 'react';
import '../LandscapeModeOverlay.css'; // Import the CSS for styling

const LandscapeModeOverlay = ({ show }) => {
    if (!show) {
        return null;
    }
        return (
            <div className="overlay p-4">

                The website is available on Moblie screens!
                <br />
                The Site is still underdevelopment for desktop and laptop screens.
                Thank You For your Patience
            </div>
        );
};

export default LandscapeModeOverlay;
