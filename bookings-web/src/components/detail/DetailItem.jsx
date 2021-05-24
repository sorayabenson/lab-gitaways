import React from 'react';
import PropTypes from 'prop-types';
import style from './detail.module.css';

const DetailItem = ({ name, slug, location, description, pricePerNight, image, maxGuests, petFriendly, pool, wifi }) => (
 <section className={style.listing}>
     <h2>{name}</h2>
     <h3>{slug}</h3>
     <h4>{location}</h4>
     <p>{description}</p>
     <p>{pricePerNight}</p>
     <img src={image} alt={name}/>
     <p>{maxGuests}</p>
     <p>{petFriendly ? 'Pet friendly' : 'No pets allowed'}</p>
     {pool ? <p>splish splash</p> : null}
     {wifi ? <p>ride the web, baby!</p> : null}
 </section>
)

DetailItem.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    maxGuests: PropTypes.number.isRequired,
    petFriendly: PropTypes.bool.isRequired,
    pool: PropTypes.bool.isRequired,
    wifi: PropTypes.bool.isRequired,
}

export default DetailItem;
