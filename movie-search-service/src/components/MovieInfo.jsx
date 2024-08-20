import React from 'react';

const MovieInfo = ({ movie }) => {
    return (
        <div style={styles.container}>
            <div style={styles.posterContainer}>
                <img src={movie.posterUrl} alt={`${movie.title} 포스터`} style={styles.poster} />
            </div>
            <div style={styles.detailsContainer}>
                <h2 style={styles.title}>{movie.title}</h2>
                <p style={styles.detail}>감독: {movie.director}</p>
                <p style={styles.detail}>개봉일: {movie.releaseDate}</p>
                <div style={styles.descriptionContainer}>
                    <p style={styles.description}>{movie.description}</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
    },
    posterContainer: {
        flexShrink: 0,
        marginRight: '20px',
    },
    poster: {
        width: '400px',
        height: '550px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginRight: '20px',
    },
    detailsContainer: {
        backgroundColor: '#f9f9f9',
        height: '500px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
    },
    title: {
        fontSize: '32px',
        margin: '10px 0',
    },
    detail: {
        fontSize: '18px',
        margin: '5px 0',
    },
    descriptionContainer: {
        marginTop: '20px',
    },
    description: {
        fontSize: '18px',
        lineHeight: '1.6',
        textAlign: 'justify',
    },
};

export default MovieInfo;
