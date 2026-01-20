import React from 'react';

const ImageSlider = () => {
    const matches = [
        { id: 1, name: 'Likes', count: 32, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces', isLikes: true },
        { id: 2, name: 'Tony', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces' },
        { id: 3, name: 'James', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces' },
        { id: 4, name: 'Alexandra', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces' },
        { id: 5, name: 'Michael', img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=150&h=150&fit=crop&crop=faces' },
        { id: 6, name: 'Sarah', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces' },
    ];

    return (
        <div className="image-slider" style={styles.imageSlider}>
            <div style={styles.matchesSection}>
                <h3 style={styles.sectionTitle}>Recent Matches</h3>
                <div style={styles.matchesSlider}>
                    {matches.map((match) => (
                        <div key={match.id} style={styles.matchAvatarWrapper}>
                            <img src={match.img} alt={match.name} style={styles.matchAvatar} />
                            {match.isLikes && (
                                <div style={styles.likesOverlay}>
                                    <span style={styles.heartIcon}>♥</span>
                                    <span style={styles.likesCount}>{match.count}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    imageSlider: {
        width: '100%',
        padding: '20px 0 25px 0',
        backgroundColor: '#3b0046',
        overflowX: 'auto',
    },
    sectionTitle: {
        margin: '10px 0 15px 0',
        fontSize: '10px',
        fontWeight: '200',
        fontFamily: 'Aldrich, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#e0e0e0',
        textAlign: 'left',
    },
    matchesSection: {
        padding: '0 12px',
    },
    matchesSlider: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    },
    matchAvatarWrapper: {
        position: 'relative',
        width: '70px',
        height: '70px',
        borderRadius: '12px',
        overflow: 'hidden',
        flexShrink: 0,
    },
    matchAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        objectFit: 'cover',
    },
    likesOverlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(250, 155, 231, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
    },
    heartIcon: {
        color: 'white',
        fontSize: '18px',
        lineHeight: '1',
    },
    likesCount: {
        color: '#fff',
        fontSize: '15px',
        fontWeight: '100',
        fontFamily: 'Aldrich, sans-serif',
    },
};

export default ImageSlider;
