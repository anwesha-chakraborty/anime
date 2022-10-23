import  axios  from 'axios';
import React, { useEffect, useReducer, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnime, watchlistanime } from '../redux/actions/animeActions';
import { Link } from 'react-router-dom';
import "./index.css"
import { addToCart } from '../Watchlater';
import Header from '../Header';



const Anime = () => {
    
    const animes = useSelector ((state) => state.allAnime.animes)
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
   
    const handleAddToCart = (anime) => {
        dispatch(addToCart(anime))
    }

    const fetchAnimes = async() => {
        const response = await axios
        .get("https://api.jikan.moe/v4/anime")
        .catch((err) => {
            console.log('Err', err);
        });
    dispatch(setAnime (response.data.data))
    }
    

    useEffect(()=>{
        fetchAnimes();
    },[])

    return(
        <>
        <div class="searchBox">

            <input class="searchInput"type="text" name="" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button class="searchButton" href="#">
            <i class="material-icons">
            search
            </i>
            </button>
        </div>
        <div className='container my-1'>
            <div className='row m-1 '>
                {/**/}
                {animes.filter((anime)=> anime.title.toLowerCase().includes(search)).map((anime) => {
                    return(
                        <div className='col col-sm-4 col-md-3  my-1 example' key={anime.mal_id}>
                            <Link to={`./${anime.mal_id}`} style={{textDecoration: "none", color: "black"}}>
                                <div >
                                    <img src={anime.images.webp.image_url} className="rounded my-auto" style={{height: "300px"}}/>
                                </div>
                            </Link>
                            <div className='container-fluid'>
                                <button className=' m-2 btn btn-dark' onClick={()=> handleAddToCart(anime)}>Add to WatchList</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}



export default Anime;