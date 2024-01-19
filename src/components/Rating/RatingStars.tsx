import React from 'react';
import s from './RatingStars.module.css';

type TProps = {
    value: number 
}

const Rating = ( props: TProps ) => {
    const maxStars = 10;
    const roundedValue = Math.round(props.value * 2) / 2; // Округление до ближайшего 0.5
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        const starClassName =
          i <= roundedValue
            ? 'star-filled'
            : i - 0.5 === roundedValue
            ? 'star-half-filled'
            : 'star-empty';
        stars.push(<span key={i} className={`${s.star} ${s[starClassName]}`}></span>);
      }
      return stars;
    };
  
    return <div className="rating">{renderStars()}</div>;
  };

export default Rating;