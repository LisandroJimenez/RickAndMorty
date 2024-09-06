import { useEffect, useState } from 'react'
import { reqCharacter } from '../service/character'

export const useCharacters = (page, searchTerm) => {
    const [characters, setCharacters] = useState([])
    const [pag, setPag] = useState(1)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page, 20, searchTerm)
                setCharacters(data.results || [])
                setPag(data.info ? data.info.pages : 1) // Usa el número total de páginas de la API
            } catch (error) {
                console.error('Error fetching characters:', error)
                setError(error)
            }
        }
        fetchCharacters()
    }, [page, searchTerm])

    return {
        characters,
        pag,
        error
    }
}
