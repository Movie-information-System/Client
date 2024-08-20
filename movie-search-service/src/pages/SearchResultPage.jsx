import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar_SearchResult';
import SearchedMovie from '../components/SearchedMovie';

const movies = [
    { title: '아바타 2 : 물의 길', director: '제임스 카메론', year: '2009'},
    { title: '아바타', director: '제임스 카메론', year: '2009'},
];

const SearchResultsPage = () => {
    return (
        <div style={styles.pageContainer}>
            <Header headername={'검색 목록'}/>
            <SearchBar />
            <SearchedMovie movies={movies} />
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
};

export default SearchResultsPage;
