import { useContext } from "react";
import { ThemeContext } from "@/theme";
import { books } from "@/helper";
import Navbar from "@/components/layout/navbar";
import Bookcard from "@/components/layout/bookcard";
import Footer from "@/components/layout/footer";

export default function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`min-vh-100 ${theme === "light" ? "bg-light" : "bg-dark text-white"}`}>
      <Navbar route='/genres' name='View Genres' />
      <main className="container my-5">
        <h2 className="h3 mb-4">Featured Books</h2>
        <div className="row">
          {books.map((book) => {
            return (
              <Bookcard key={book.id} book={book} />
            );
          })}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
