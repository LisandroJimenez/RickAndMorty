export const reqCharacter = async (page = 1, limit = 20, searchTerm = '') => {
    const offset = (page - 1) * limit
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(searchTerm)}`

    const response = await fetch(url)
    const data = await response.json()
    return data || { results: [], info: { pages: 1 } }
}
