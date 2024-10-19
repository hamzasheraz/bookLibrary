import data from '../data.json';

const books = data.books;
const authors = data.authors;
const genres = data.genres;

export async function getEachBookData(id) {
    const book = books.find((book) => book.id === id);
    if (!book) {
        return null;
    }
    const author = authors.find((author) => author.id === book.authorId)?.name || 'Unknown Author';
    const genre = genres.find((genre) => genre.id === book.genreId)?.name || 'Unknown Genre';
    return { ...book, author, genre };
}

export { books, genres, authors };