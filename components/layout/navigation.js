import { useRouter } from 'next/router';

const Navigation = ({ route,name }) => {
    const router = useRouter();
    const handleViewGenres = () => {
        router.push('/' + route);
    };
    return (
        <button className="btn btn-outline-light" onClick={() => handleViewGenres()}>
            {name}
        </button>
    )
}

export default Navigation