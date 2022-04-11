import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import '../css/Home.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&&genre=Romance`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className='home-container'>
        {loading ? <h1>Loading... </h1> : <div className='container'>
            {movies.map(movie => (
            <Movie 
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}/>
            ))};
            </div>
        }
        </div>
    );
}
export default Home;