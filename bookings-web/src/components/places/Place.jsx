import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './places.module.css';

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <Link 
      to={id}
      className={style.place}>
      <img src={imageThumbnail} alt={name}/>
      <section>
        <header>
          <div className={style.baseDetail}>
            <h2>{name}</h2>
            <p>${pricePerNight} per night</p>
          </div>
          <h3>{description}</h3>
          <h4>{location}</h4>
        </header>
        <div className={style.bonusDetail}>
          <p>Max # of guests: {maxGuests}</p>
          <p>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
          {pool ? <p>Has a Pool!</p> : null}
          {wifi ? <p>Free Wifi</p> : null}
        </div>
      </section>
    </Link>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
