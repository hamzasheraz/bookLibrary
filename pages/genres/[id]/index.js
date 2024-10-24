import { useRouter } from 'next/router';
import { books, genres } from "@/helper";
import { useContext } from 'react';
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeContext } from "@/theme";

const GenrePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { theme } = useContext(ThemeContext);
  const filteredBooks = books.filter(book => book.genreId === id);
  const genreName = genres.find(genre => genre.id === id)?.name || "Unknown Genre";

  return (
    <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"} min-vh-100`}>
      <Navbar route='/' name='Back' />
      <div className="container mt-5">
        <h2>Books in {genreName}</h2>
        {filteredBooks.length === 0 ? (
          <p>No books found in this genre.</p>
        ) : (
          <ul className="list-group">
            {filteredBooks.map(book => (
              <li key={book.id} className={`list-group-item ${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}`}>
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

export default GenrePage;
