import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getListing } from '../services/placesApi';

export const useListing = () => {
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getListing(id)
            .then(setListing)
            .finally(() => setLoading(false))
    }, [])

    return { loading, listing }
}