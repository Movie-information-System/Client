import React from 'react';

const Recent_Movie = ({ movies }) => {
    return (
        <div style={styles.recentMovieContainer}>
            <ul style={styles.movieList}>
                {movies.map((movie, index) => (
                    <li key={index} style={styles.movieItem}>
                        <span style={styles.movieTitle}>{movie.title}</span>
                        <span style={styles.movieDate}>{movie.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    recentMovieContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    movieList: {
        width: '1200px',
        listStyleType: 'none',
        padding: 0,
    },
    movieItem: {
        Width: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        fontSize: '20px',
    },
    movieTitle: {
        fontWeight: 'bold',
    },
    movieDate: {
        color: '#888',
    },
};

export default Recent_Movie;
