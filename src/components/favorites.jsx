import React from 'react';
import { useSelector } from 'react-redux';
import likeIcon from '../assets/images/icons8-love-48 (1).png'


function DisplayFavorites ({ setFavImage }) {
    const { favoriteImages } = useSelector(state => state.pictures)
    
  return (
      <div className="fav_container">
          {
              favoriteImages.map((fav, key) => 
               <div className="fav_card" key={key}>
                  <img  src={fav.url} className="fav-image" alt={fav.title}/>
                  <div className="img__info">
                     <img src={likeIcon} className="icon" onClick={() => setFavImage(fav)} alt='like'/>
                     <h3>{fav.title}</h3>
                  </div>
                  <p className="fav_exp">{fav.explanation}</p>
               </div> 
                
              )
          }
      </div>
  );
}

export default DisplayFavorites;
