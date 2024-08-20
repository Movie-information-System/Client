import React from 'react';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Placeholder" />
            <button><i className="fas fa-search"></i></button>
        </div>
    );
}