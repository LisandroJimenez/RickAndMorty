import React from 'react';

export const GridCharacters = ({ characters }) => {
    return (
        <div className='d-flex flex-row row row-cols-6'>
            {characters && characters.map((char) => (
                <div key={char.id} className='col mb-4'>
                    <div className='card' style={{ width: '14rem' }}>
                        <img src={char.image} className='card-img-top' alt={`Image of ${char.name}`} />
                        <div className='card-body'>
                            <h5 className='card-title'>{char.name}</h5>
                            <p className='card-text'> {char.status}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
