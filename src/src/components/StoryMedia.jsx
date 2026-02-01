import React from 'react';
import storyBackground from '../assets/story_background.jpg';

const StoryMedia = () => {
    return (
        <div style={styles.storyMedia}>
            <h1 style={styles.storyTitle}># Tea Time</h1>
        </div>
    );
};

const styles = {
    storyMedia: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${storyBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
        boxSizing: 'border-box',
    },
    storyTitle: {
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontSize: '30px',
        fontFamily: 'Aldrich, sans-serif',
        margin: '0',
    },
};

export default StoryMedia;
