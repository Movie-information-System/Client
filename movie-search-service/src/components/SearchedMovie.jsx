import React from 'react';

const SearchedMovie = ({ movies }) => {
    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.tableHeader}>제목</th>
                    <th style={styles.tableHeader}>감독</th>
                    <th style={styles.tableHeader}>제작년도</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((movie, index) => (
                    <tr key={index} style={styles.tableRow}>
                        <td style={styles.tableCell}>{movie.title}</td>
                        <td style={styles.tableCell}>{movie.director}</td>
                        <td style={styles.tableCell}>{movie.year}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        fontSize: '18px',
    },
    tableHeader: {
        fontWeight: 'bold',
        borderBottom: '2px solid #ccc',
        padding: '10px',
    },
    tableRow: {
        borderBottom: '1px solid #ccc',
    },
    tableCell: {
        padding: '10px',
    },
};

export default SearchedMovie;
