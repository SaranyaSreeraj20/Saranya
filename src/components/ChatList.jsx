import React from 'react';

const ChatList = () => {
    const chats = [
        { id: 1, name: 'Alfredo', message: 'What about that new jacket if I ...', time: '09:18', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=faces', unread: true },
        { id: 2, name: 'Clara', message: 'I know right 🙄', time: '12:44', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces', unread: true },
        { id: 3, name: 'Brandon', message: 'I already registered, can\'t wai...', time: '08:06', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces', unread: true },
        { id: 4, name: 'Amina ', message: 'It will have two lines of heading ...', time: '09:32', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&h=150&fit=crop&crop=faces', unread: false },
    ];

    return (
        <div className="chat-list-section" style={styles.chatListSection}>
            {chats.map((chat) => (
                <div key={chat.id} style={styles.chatItem}>
                    <div style={styles.chatAvatarContainer}>
                        <img src={chat.img} alt={chat.name} style={styles.chatAvatar} />
                    </div>
                    <div style={styles.chatInfo}>
                        <div style={styles.chatHeader}>
                            <span style={styles.chatName}>{chat.name}</span>
                            {chat.unread && <span style={styles.unreadDot}></span>}
                        </div>
                        <p style={{
                            ...styles.chatMessage,
                            textAlign: chat.name === 'Clara' ? 'right' : 'left'
                        }}>{chat.message}</p>
                    </div>
                    <div style={styles.chatActions}>
                        <span style={styles.chatTime}>{chat.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    chatListSection: {
        width: '100%',
        backgroundColor: '#fff',
        padding: '10px 0',
        borderRadius: '20px',
    },
    chatItem: {
        display: 'flex',
        padding: '15px',
        alignItems: 'center',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
    },
    chatAvatarContainer: {
        position: 'relative',
        marginRight: '15px',
    },
    chatAvatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    chatInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    chatHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4px',
    },
    chatName: {
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#333',
        fontFamily: 'Aldrich, sans-serif',
    },
    unreadDot: {
        height: '8px',
        width: '8px',
        backgroundColor: 'rgba(231, 90, 202, 0.75)',
        borderRadius: '50%',
    },
    chatMessage: {
        margin: '0 ',
        fontSize: '0.85rem',
        color: '#666',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '200px',
    },
    chatActions: {
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    chatTime: {
        fontSize: '0.75rem',
        color: '#999',
    },
};

export default ChatList;
