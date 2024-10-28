// FullPageSearchModal.js
import React, { useState } from 'react';
import './SearchModal.css'; // Custom styles

const FullPageSearchModal = ({ show, handleClose, onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      try {
        const response = await fetch(`http://localhost:1337/api/search?query=${query}`);
        const data = await response.json();
        setResults(data.results); // Adjust based on your API response
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Optional: Background overlay
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-fullscreen" role="document">
        <div className="modal-content ">
          <div className="modal-header ">
            <h5 className="modal-title">Search</h5>
            <button type="button" className="close " onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
              <input
                type="text"
                className="form-control search-bar mb-3"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="search-results">
              {results.length > 0 ? (
                <ul className="list-group">
                  {results.map((result, index) => (
                    <li key={index} className="list-group-item">
                      {result.name} {/* Adjust based on your API response */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageSearchModal;
