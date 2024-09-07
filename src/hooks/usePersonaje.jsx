import { useEffect, useState } from 'react'
import { reqCharacter, reqSpecies } from '../service/personaje'

export const useCharacters = (page, searchTerm, species) => {
    const [characters, setCharacters] = useState([])
    const [pag, setPag] = useState(1)
    const [allSpecies, setAllSpecies] = useState([])

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page, searchTerm, species)
                setCharacters(data.results || [])
                setPag(data.info?.pages || 1)
            } catch (error) {
                console.error('Error fetching characters:', error)
                setCharacters([])
                setPag(1)
            }
        }
        fetchCharacters()
    }, [page, searchTerm, species])

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const speciesList = await reqSpecies()
                setAllSpecies(speciesList)
            } catch (error) {
                console.error('Error fetching species:', error)
                setAllSpecies([])
            }
        }
        fetchSpecies()
    }, [])

    return {
        characters,
        pag,
        allSpecies
    }
}
