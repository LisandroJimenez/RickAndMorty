import React, { useState } from 'react';
import { useCharacters } from '../hooks/usePersonaje';
import { GridCharacters } from './GridCharacters';
import Pagination from '@mui/material/Pagination';
import { BuscarPersonaje } from './BuscarPersonaje';

export const App = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecies, setSelectedSpecies] = useState('');
    
    const { characters, pag, allSpecies } = useCharacters(page, searchTerm, selectedSpecies);

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); // Resetea la página al 1 cuando se cambia la búsqueda
    }

    return (
        <>
            <nav className='navbar navbar-dark bg-dark fixed-top position-relative'>
                <div className='container-fluid'>
                    <a className='navbar-brand'>Personajes de Rick y Morty</a>
                </div>
            </nav>

            <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
                <BuscarPersonaje handleSearch={setSelectedSpecies} allSpecies={allSpecies} />
            </div>

            <GridCharacters characters={characters} />

            <Pagination className='d-flex justify-content-center mt-4' count={pag} page={page} onChange={handlePageChange} />
        </>
    )
}
