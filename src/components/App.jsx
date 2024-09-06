import React, { useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import { GridCharacters } from './GridCharacters'
import Pagination from '@mui/material/Pagination'
import { BuscarSp } from './BuscarSp'

export const App = () => {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const { characters, pag, error } = useCharacters(page, searchTerm)

    const handlePageChange = (event, value) => {
        setPage(value)
    }

    const handleSearch = (term) => {
        setSearchTerm(term)
        setPage(1) // Reset to first page when searching
    }

    return (
        <>
            {error && <p>Error: {error.message}</p>}

            <nav className='navbar navbar-dark bg-dark fixed-top position-relative'>
                <div className='container-fluid'>
                    <a className='navbar-brand'>Personajes</a>
                </div>
            </nav>

            <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
                <BuscarSp handleMarvel={handleSearch} />
            </div>

            <GridCharacters characters={characters} />

            <Pagination
                className='d-flex justify-content-center mt-4'
                count={pag}
                page={page}
                onChange={handlePageChange}
            />
        </>
    )
}
