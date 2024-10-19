import { books } from "@/helper";
import Navbar from "@/components/layout/navbar";
import Bookcard from "@/components/layout/bookcard";

export default function Home() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
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
    </div>
  );
}
