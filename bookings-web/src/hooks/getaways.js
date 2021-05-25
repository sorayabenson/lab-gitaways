import { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';

export const useGetaways = () => {
    const [loading, setLoading] = useState(true)
    const [places, setPlaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        getPlaces()
            .then(setPlaces)
            .finally(() => setLoading(false))
    }, []);

    const indexEnd = currentPage * perPage;
    const indexStart = indexEnd - perPage;
    const currentPlaces = places.slice(indexStart, indexEnd)

    const handleNextPage = (pageNumber) => {
        setCurrentPage(pageNumber -1)
    }

    const handlePrevPage = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
    }

    return { loading, places, currentPage, currentPlaces, perPage, handlePrevPage, handleNextPage }
}