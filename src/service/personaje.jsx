export const reqCharacter = async (page = 1, searchTerm = '', species = '') => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`
    
    if (searchTerm) {
        url += `&name=${encodeURIComponent(searchTerm)}`
    }

    if (species) {
        url += `&species=${encodeURIComponent(species)}`
    }

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching characters:', error)
        return { results: [], info: { pages: 1 } }
    }
}

export const reqSpecies = async () => {
    let speciesSet = new Set()
    let page = 1
    let data

    do {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        data = await response.json()
        data.results.forEach(character => speciesSet.add(character.species))
        page++
    } while (data.info?.next)

    return Array.from(speciesSet)
}
