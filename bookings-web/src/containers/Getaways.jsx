import React from 'react';
import Pagination from '../components/pagination/Pagination';
import PlaceList from '../components/places/PlaceList';
import Spinner from '../components/spinner/Spinner';
import { useGetaways } from '../hooks/getaways';

const Getaways = () => {
  const { loading, places, currentPlaces, currentPage, perPage, handlePrevPage, handleNextPage } = useGetaways();

  if (loading) return <Spinner />

  return (
    <main>
      {/* <Pagination 
        currentPage={currentPage}
        perPage={perPage}
        places={places}
        clickPrevPage={handlePrevPage}
        clickNextPage={handleNextPage}/> */}
      <PlaceList places={currentPlaces}/>
    </main>
  );
};

export default Getaways;
