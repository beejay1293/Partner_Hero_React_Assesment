import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import DatePicker from "react-datepicker"; 
import { db } from '../firebase'
import firebase from 'firebase'
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuidv4 } from 'uuid';

import { set_favorite_info, remove_favorite_info, fetchImage, fetchImagePreviews, set_user_id } from '../redux/actions'
import unlikeIcon from '../assets/images/icons8-love-48.png'
import likeIcon from '../assets/images/icons8-love-48 (1).png'
import Loader from '../components/spinner'
import ChevronRight from '../components/ChevronRight'
import ChevronLeft from '../components/ChevronLeft'
import FavImages from '../components/favorites'
import Header from '../components/header'

import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../assets/styles/index.css'




function DisplayImage () {

    const { favoriteImages, pictureOfTheDay, isLoading, selectedDate, prevImage, nextImage, userId } = useSelector(state => state.pictures)
    const [dashState, setDashState] = useState('potd') 

    const dispatch = useDispatch()

    useEffect(() => {
      if(!userId) {
        const userId = uuidv4();
        dispatch(set_user_id(userId))
      }
      dispatch(fetchImage(selectedDate))
      dispatch(fetchImagePreviews(selectedDate))
      toast.success("welcome to NASA's astronomy picture of the day")
    }, [selectedDate])
    


    const setFavoriteImage = (fav) => {
        const { title } = fav
        const isFavorite = !!favoriteImages.find(e => e.title === title)
        if(isFavorite) {
          handleFavoriteImages(userId, fav, false)
          return dispatch(remove_favorite_info(fav))
        }
        dispatch(set_favorite_info(fav))
        handleFavoriteImages(userId, fav)
        toast.success('Image saved')
    }
    

    const handleFavoriteImages = (uid, fav, like=true) => {
      const op = like ? firebase.firestore.FieldValue.arrayUnion : firebase.firestore.FieldValue.arrayRemove
            db.collection('favoriteImages')
              .doc(uid)
              .update({ images: op(fav) }).then(doc => {
                console.log('success', doc);
              }).catch(e => console.log('error', e.response))
    }

    const getImage = async (date) => {
       const formatDate = date.toLocaleDateString('fr-CA') 
       await dispatch(fetchImage(formatDate))
       await dispatch(fetchImagePreviews(formatDate))
    }

    const renderLikeIcon = () => {
      const isFav = favoriteImages.find(e => e.title === pictureOfTheDay.title)
      if(isFav) return likeIcon
      return unlikeIcon
    }

    const clickHandler = async (action) => {
      let date = new Date(selectedDate)
     
      if(action === 'prev') {
        date.setDate(date.getDate() - 1);
      } else {
        date.setDate(date.getDate() + 1);
      }
      await getImage(date) 
    };

    const renderArrowPrev = (onClickHandler, hasPrev, label) => 
      hasPrev && (
        <button type="button" className="preview__slide-button left" onClick={() => onClickHandler('prev')} title={label} >
          <ChevronLeft />
        </button>
      )

    const renderArrowNext = (onClickHandler, hasNext, label) =>
      hasNext && (
        <button type="button" className="preview__slide-button right" onClick={() => onClickHandler('next')} title={label}  >
          <ChevronRight />
        </button>
      )

    const customRenderThumb = (children) =>
      children.map((item, key) => {
        return <img src={item} key={key} alt=""/>;
      });

  return (
    <div className="container__home">
      <Header dashState={dashState} setState={setDashState}/>
      { dashState === 'potd' ?  
      <div className="container">
       {isLoading ? (<div className="loader_container"><Loader /></div>) :
          <div className="potd__container">
              <div className="image_container">
                  <h1>{ pictureOfTheDay.title}</h1>
                  <Carousel renderThumbs={() => customRenderThumb([prevImage, pictureOfTheDay.url, nextImage])} showIndicators={false} showStatus={false} renderArrowPrev={() => renderArrowPrev(clickHandler, true, 'prev')} renderArrowNext={() => renderArrowNext(clickHandler, true, 'next')} >
                    <img src={ pictureOfTheDay.url} className="image" alt={pictureOfTheDay.title}/>
                  </Carousel >
              </div>
              <div className="image__info">
                 <div className="fav" onClick={() => setFavoriteImage(pictureOfTheDay)}>
                     <img src={renderLikeIcon()} alt="like_image"/>
                 </div>
              <div className="date">
                 <DatePicker
                    selected={new Date(selectedDate)}
                    onChange={(value) => getImage(value)}
                    className="date_picker"
                 />
               </div>
            </div>
            <div className="image_description">
              { pictureOfTheDay.explanation }
            </div>
          </div>
       }
      </div> :
      <FavImages setFavImage={setFavoriteImage}/>
      }
      </div>
  );
}

export default DisplayImage;
