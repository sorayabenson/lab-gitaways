import React from 'react';
import PropTypes from 'prop-types';
import style from './pagination.module.css';

const Pagination = ({ currentPage, perPage, places, clickPrevPage, clickNextPage }) => {
    const pages = []
    const lastPage = Math.ceil(places / perPage)
    
    for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
    }

    return (
        <nav className={style.pagination}>
            {/* <p>page</p>
            <ul>
                {pages.map(page => (
                    <li key={page}>
                        <a  
                            onClick={() => paginate({page})} 
                            href='!#'
                        >{page}</a>
                    </li>
                ))}
            </ul> */}
            <button 
            onClick={clickPrevPage}
            disabled={currentPage === 1}
            >previous</button>
            <p>page</p>
            <button 
            onClick={clickNextPage}
            disabled={currentPage === lastPage
            }>next</button>
        </nav>
    )
}

Pagination.propTypes = {

}

export default Pagination;