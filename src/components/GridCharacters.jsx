import React, { useEffect, useState } from 'react';
import { reqPersonaje } from './path-to-your-service'; // Ajusta la ruta según tu estructura de carpetas

export const GridCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await reqPersonaje();
            setCharacters(data);
        };

        fetchCharacters();
    }, []);

    return (
        <div className='d-flex flex-row row row-cols-6'>
            {
                characters.length > 0 ? (
                    characters.map((char) => (
                        <div key={char.id} className='col'>
                            <li>{char.name}</li>
                            <img
                                style={{ width: '14rem' }}
                                src={char.image}
                                alt={char.name}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};
