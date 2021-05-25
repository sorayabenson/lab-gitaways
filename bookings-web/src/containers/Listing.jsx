import React from 'react';
import Spinner from '../components/spinner/Spinner';
import DetailItem from '../components/detail/DetailItem';
import { useListing } from '../hooks/listing';

const Listing = () => {
    const { loading, listing } = useListing();

    if (loading) return <Spinner />
    
    return (
        <main>
            <DetailItem listing={listing}/>
        </main>
    )
}

export default Listing;