import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PageHeaderMessage = () => {
    return (
        <div className="page-header-message" style={styles.headerContainer}>
            <div style={styles.iconContainer}>
                <ArrowLeft size={20} />
            </div>
            <h2 style={styles.headerTitle}>Messages</h2>
        </div>
    );
};

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 10px',
        color: '#fff',
        width: '100%',
        backgroundColor: '#3b0046',
        position: 'relative',
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: '500',
        color: '#fff',
        margin: 0,
        fontFamily: 'Aldrich, sans-serif',
    },
    iconContainer: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '10px',
    }
};

export default PageHeaderMessage;
