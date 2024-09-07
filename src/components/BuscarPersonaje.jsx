import React, { useState } from 'react';

export const BuscarPersonaje = ({ handleSearch, allSpecies }) => {
    const [selectedSpecies, setSelectedSpecies] = useState('');

    const handleSpeciesChange = (event) => {
        const species = event.target.value;
        setSelectedSpecies(species);
        handleSearch(species); // Actualiza la búsqueda con la especie seleccionada
    }

    return (
        <select className="form-select" aria-label="Default select example" value={selectedSpecies} onChange={handleSpeciesChange}>
            <option value="">Seleccionar Especie</option>
            {allSpecies.map((specie, index) => (
                <option key={index} value={specie}>{specie}</option>
            ))}
        </select>
    )
}
