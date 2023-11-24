import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='7dd03c3caed1e20dd907f97e53045eba'


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=7dd03c3caed1e20dd907f97e53045eba';

const getTrandingVideo = axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id);


export default {
    getTrandingVideo,
    getMovieByGenreId
}