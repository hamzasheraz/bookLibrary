import { useRouter } from 'next/router';
import { books, authors } from "@/helper";
import Footer from "@/components/layout/footer";
import { useContext } from 'react';
import { ThemeContext } from "@/theme";
import Navbar from "@/components/layout/navbar";

const AuthorDetails = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((book) => book.id === id);
  if (!book) {
    return <div>Book not found.</div>;
  }

  const author = authors.find((author) => author.id === book.authorId);

  return (
    <div className={`min-vh-100 ${theme === "light" ? "bg-light" : "bg-dark text-white"}`}>
      <Navbar route='/' name='Back' />
      <div className="container mt-5">
        <h2>Author Details</h2>
        {author ? (
          <div>
            <h3>{author.name}</h3>
            <p>{author.biography}</p>
          </div>
        ) : (
          <p>Author information not available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorDetails;
