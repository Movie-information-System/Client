import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBar_Main';
import MovieList from '../components/Recent_Movie';

const movies = [
    { title: '아바타', date: '2024. 8. 10' },
    { title: '어벤저스', date: '2024. 8. 10' },
    { title: '아이언 맨', date: '2024. 8. 10' },
];

const MainPage = () => {
    return (
        <div style={styles.container}>
            <Header headername={'영화 제목'} />
            <SearchBox />
            <MovieList movies={movies} />
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
};

export default MainPage;
