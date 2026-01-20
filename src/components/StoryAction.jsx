import React from 'react';
import { MessageSquare, X } from 'lucide-react';

const StoryAction = () => {
    return (
        <div className="storyAction" style={styles.storyAction}>
            <button style={styles.newMessage}>
                <div style={{ width: '20px' }}></div>
                <span>NEW</span>
                <MessageSquare size={20} className="btnIcon" />
            </button>
            <div style={styles.storyClose}>
                <X size={18} color="#fff" />
            </div>
        </div>
    );
};
const styles = {
    storyAction: {
        width: '100%',
        height:'70px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        gap: '15px',
        backgroundColor:'black',
    },

    newMessage: {
        backgroundColor: ' #44034f',
        color: '#fff',
        fontFamily: 'Aldrich, sans-serif',
        fontSize: '16px',
        padding: '10px 24px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: '326px',
        height: '49px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',

    },

    storyClose: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4b4b',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        transition: ' all 0.2s ease',
        flexShrink: '0',
    },

    // storyClose:hover {
    //     backgroundcolor:' #ff3333',
    //     transform: 'scale(1.1)',
    // },

    //     closeIcon: {
    //     color: 'white',
    //     stroke-width: '3px',
    // },
}


export default StoryAction;