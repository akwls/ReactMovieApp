import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/Detail.css';

function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState({})
    const getMovie = async () => {
        const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie();
    })
    return (
        <div className="detail-container">
            {loading ? <h1>Loading....</h1> : null}
            <img className="coverImg" src={movie.large_cover_image} alt={movie.title}></img>
            <div>
                <h1 className="title">{movie.title}</h1>
                <p className="description">{movie.description_full}</p>
                <div>
                    <div className="like">
                        <img className="icon_img" src={`${process.env.PUBLIC_URL}/img/heart.png`}></img>
                        <span>{movie.like_count}</span>
                    </div>
                    <div className="download">
                        <img className="icon_img" src={`${process.env.PUBLIC_URL}/img/download.png`}></img>
                        <span>{movie.download_count}</span>
                    </div>
                </div>
          </div>
        </div>
        
    )
}
export default Detail;