import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import style from './places.module.css';

const PlaceList = ({ places }) => (
  <ul className={style.list}>
    {places.map((place) => {
      return (
        <li key={place.id}>
          <Place key={place.id} {...place} />
        </li>)})}
  </ul>
);

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default PlaceList;
