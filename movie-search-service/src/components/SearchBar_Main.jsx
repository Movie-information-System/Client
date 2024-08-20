import React from 'react';

const SearchBar_Main = () => {
    return (
        <div style={styles.searchBoxContainer}>
            <input
                type="text"
                placeholder="찾고자 하는 영화를 입력하세요"
                style={styles.searchBox}
            />
            <button style={styles.searchButton}>
                <img src="/images/search_button.png" alt="Search" style={styles.searchIcon}/>
            </button>
        </div>
    );
};

const styles = {
    searchBoxContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    searchBox: {
        width: '100%',
        height: '65px',
        maxWidth: '850px',
        paddingLeft: '20px',
        fontSize: '30px',
        border: '1px solid #ccc',
        borderRadius: '4px 0 0 4px',
        outline: 'none',
    },
    searchButton: {
        padding: '10px',
        border: 'none',
        backgroundColor: '#ccc',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        width: '49px',
        height: '49px',
    },
};

export default SearchBar_Main;
