import useSWR from 'swr';
import Navbar from "@/components/layout/navbar";
import { getAllAuthor } from '@/helper';
import { useContext } from 'react'; 
import { ThemeContext } from '@/theme';

const fetchAuthors = async () => {
  const response = await getAllAuthor(); 
  if (!response) {
    throw new Error('Failed to fetch authors');
  }
  return response;
};

const AuthorsPage = () => {
  const { theme } = useContext(ThemeContext);
  const { data: authors, error } = useSWR('/api/authors', fetchAuthors);

  if (!authors) return <div>Loading authors...</div>;
  if (error) return <div>Failed to load authors: {error.message}</div>;

  return (
    <div className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"} min-vh-100`}>
    <Navbar route='/' name='Back' />
    <div className="container mt-5">
      <h2>Authors List</h2>
      <ul className="list-group">
        {authors.map((author) => (
          <li
            key={author.id}
            className={`list-group-item ${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}`}
          >
            <h5>{author.name}</h5>
            <p>{author.biography}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default AuthorsPage;
