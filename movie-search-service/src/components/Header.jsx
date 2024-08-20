import React from 'react';

const Header = ({headername}) => {
    return (
        <header style={styles.header}>
            <img src="/images/toy_logo.png" alt="Logo" style={styles.logo} />
            <h1 style={styles.title}>{headername}</h1>
        </header>
    );
};

const styles = {
    header: {
        position: 'relative',
        height: '100px',  // 헤더 높이 설정
        marginBottom: '20px',
        textAlign: 'center',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
    },
    logo: {
        position: 'absolute',
        top: '20px',
        left: '10px',
        width: '50px',
        height: '50px',
    },
    title: {
        fontSize: '36px',
    },
};

export default Header;
