import { useState } from "react";
import { Link } from "react-router-dom";

const TaskSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Find h1 elements with text matching the search query
    const filteredResults = Array.from(document.querySelectorAll("h1")).filter(
      (h1) => h1.textContent.toLowerCase().includes(query)
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search H1 elements"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link to={`#${result.id}`} onClick={() => setSearchQuery("")}>
                  {result.textContent}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskSearch;
