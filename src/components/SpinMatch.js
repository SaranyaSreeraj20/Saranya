import React from 'react';
import { ChevronLeft, CheckCheck } from 'lucide-react';

const SpinMatch = () => {
    return (
        <div style={styles.container}>

            <div style={styles.header}>
                <div style={styles.backButton}>
                    <ChevronLeft size={24} color="#fff" />
                </div>
            </div>

            {/* Profile Section */}
            <div style={styles.profileSection}>
                <p style={styles.distanceText}>1 km near you</p>

                <div style={styles.avatarContainer}>
                    <div style={styles.avatarGlow}></div>
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                        alt="Profile"
                        style={styles.avatar}
                    />
                </div>

                <h2 style={styles.nameText}>Sona - 27</h2>

                <button style={styles.likeButton}>
                    <CheckCheck size={16} fill="#fff" style={{ marginRight: 5 }} /> Like
                </button>
            </div>

            {/* Bottom Radar & Spin Section */}
            <div style={styles.bottomSection}>
                {/* Radar Circles */}
                <div style={{ ...styles.radarCircle, width: '300px', height: '300px', opacity: 0.5 }}></div>
                <div style={{ ...styles.radarCircle, width: '220px', height: '220px', opacity: 0.5 }}></div>
                <div style={{ ...styles.radarCircle, width: '140px', height: '140px', opacity: 0.5 }}></div>

                {/* Spin Interaction */}
                <div style={styles.spinContainer}>
                    <div style={styles.spinPill}>
                        <span style={styles.spinText}>Spin here</span>
                    </div>
                    <div style={styles.spinButton}>
                        <div style={styles.spinButtonInner}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#3b0046', // Dark purple base
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    header: {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    profileSection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        marginTop: -40, // Pull up slightly
    },
    distanceText: {
        fontSize: '14px',
        opacity: 0.8,
        marginBottom: '20px',
        letterSpacing: '0.5px',
        fontFamily: 'Aldrich',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: '20px',
        padding: '10px',
    },
    avatarGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '50%',
        border: '3px solid rgba(252, 150, 205, 0.93)',// Hot pink glow

    },
    avatar: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        border: '3px solid rgba(255,255,255,0.2)', // Inner subtle border
    },
    nameText: {
        fontSize: '14px',
        fontWeight: '200',
        marginBottom: '10px',
        fontFamily: 'Aldrich',
    },
    likeButton: {
        backgroundColor: 'rgba(252, 150, 205, 0.93)', // Pink button
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(230, 96, 168, 0.4)',
    },
    bottomSection: {
        height: '250px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '40px',
    },
    radarCircle: {
        position: 'absolute',
        bottom: '-50px', // Center partially below screen
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none',
    },
    spinContainer: {
        position: 'relative',
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    spinPill: {
        backgroundColor: '#fff',
        width: '90%',
        height: '100%',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: '-20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    spinText: {
        color: '#000',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'lowercase',
        fontFamily: 'Aldrich',
    },
    spinButton: {
        position: 'absolute',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
        bottom: '35px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinButtonInner: {
        // width: '10px',
        // height: '10px',
        backgroundColor: '#fff',

    }
};

export default SpinMatch;
