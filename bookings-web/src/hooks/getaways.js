import { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';

export const useGetaways = () => {
    const [loading, setLoading] = useState(true)
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlaces()
            .then(setPlaces)
            .finally(() => setLoading(false))
    }, []);

    return { loading, places }
}