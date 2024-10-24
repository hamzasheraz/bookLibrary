import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { books } from "@/helper";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  const handleSearch = (term) => {
    const updatedSearches = [term, ...recentSearches.filter((search) => search !== term)];
    if (updatedSearches.length > 5) {
      updatedSearches.pop();
    }

    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    const filtered = books.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));
    setFilteredBooks(filtered);
    setSearchTerm(term);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  };

  const handleRecentSearch = (term) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div>
      <Navbar route='/' name='Back' />
      <div className="container mt-5">
        <h2>Search for Books</h2>
        <form onSubmit={handleSubmit} className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        
        <h6>Recent Searches:</h6>
        <ul className="list-group mb-3">
          {recentSearches.map((search, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleRecentSearch(search)}
            >
              {search}
            </li>
          ))}
        </ul>

        <h6>Search Results:</h6>
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul className="list-group">
            {filteredBooks.map((book) => (
              <li key={book.id} className="list-group-item">
                <h5>{book.title}</h5>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price.toFixed(2)}</p>
                <p>Description: {book.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
