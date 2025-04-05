import 'dotenv/config';
import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV;
// const URL = "http://localhost:3001/api";
const URL = "https://simple-spotify-442v.onrender.com/api";

const responseArtists = await axios.get(URL + '/artists');
const responseSongs = await axios.get(URL + '/songs');

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;