import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { books, getEachBookData } from "@/helper";

const BookDetails = ({ book }) => {
    return (
        <>
            <Navbar route='/genres' name='Back' />
            <div className="container my-5">
                <h1 className="display-4">{book.title}</h1>
                <h5 className="text-muted">Author: {book.author}</h5>
                <p className="lead">{book.description}</p>
                <p className="font-weight-bold text-success">Price: ${book.price.toFixed(2)}</p>
                <p className="text-muted">Genre: {book.genre}</p>
                <p className="text-muted">Rating: {book.rating} / 5</p>
            </div>
            <Footer />
        </>
    )
}

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