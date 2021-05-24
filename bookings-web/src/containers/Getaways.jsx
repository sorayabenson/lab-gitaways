import React from 'react';
import PlaceList from '../components/places/PlaceList';
import Spinner from '../components/spinner/Spinner';
import { useGetaways } from '../hooks/getaways';

const Getaways = () => {
  const { loading, places } = useGetaways();

  if (loading) return <Spinner />

  return (
    <main>
      <PlaceList places={places}/>
    </main>
  );
};

export default Getaways;
