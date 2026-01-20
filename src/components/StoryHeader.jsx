import React from 'react';

const StoryHeader = () => {
    return (
        <div className="storyHeader" style={styles.StoryHeader}>
            <div style={styles.backArrow}>←</div>
            <div style={styles.storyProfile}>
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
                    alt="Stone Stellar"
                    style={styles.storyAvatar}
                />
                <div style={styles.onlineDot}></div>
            </div>
            <div style={styles.storyUserInfo}>
                <span style={styles.storyUserName}>Stone Stellar</span>
                <span style={styles.storyStatus}>Online</span>
            </div>
        </div>
    );
};

const styles = {
    StoryHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        
    },
    backArrow: {
        fontSize: '1.5rem',
        marginRight: '15px',
        cursor: 'pointer',
    },
    storyProfile: {
        position: 'relative',
        marginRight: '12px',
    },
    storyAvatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '2px solid #ff4b8b',
        objectFit: 'cover',
    },
    onlineDot: {
        position: 'absolute',
        bottom: '2px',
        right: '2px',
        width: '12px',
        height: '12px',
        backgroundColor: '#4ade80',
        borderRadius: '50%',
        border: '2px solid white',
    },
    storyUserInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    storyUserName: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        fontFamily: 'Aldrich, sans-serif',
    },
    storyStatus: {
        color: '#666',
        fontSize: '0.85rem',
    },
};

export default StoryHeader;
