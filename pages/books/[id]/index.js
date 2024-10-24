import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { useContext } from "react";
import { ThemeContext } from "@/theme";
import Link from "next/link";
import { books, getEachBookData } from "@/helper";

const BookDetails = ({ book }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"} min-vh-100`}>
            <Navbar route='/genres' name='Back' />
            <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"} container my-5`}>
                <h1 className="display-4">{book.title}</h1>
                <Link className={`${theme === "light" ? "text-muted" : "text-info"}`} href={`/books/${book.id}/author`}>
                    Author: {book.author}
                </Link>
                <p className="lead">{book.description}</p>
                <p className="font-weight-bold text-success">
                    Price: ${book.price.toFixed(2)}
                </p>
                <p className={`${theme === "light" ? "text-muted" : "text-secondary"}`}>
                    Genre: {book.genre}
                </p>
                <p className={`${theme === "light" ? "text-muted" : "text-secondary"}`}>
                    Rating: {book.rating} / 5
                </p>
            </div>
            <Footer />
        </div>
    );
};

export async function getStaticPaths() {
    const paths = books.map((book) => { return { params: { id: book.id } } });

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const book = await getEachBookData(params.id);

    if (!book) {
        return {
            notFound: true
        }
    }

    return {
        props: { book },
        revalidate: 1000,
    }
}

export default BookDetails;