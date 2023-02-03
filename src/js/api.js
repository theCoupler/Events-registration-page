const getData = async () => {

    try {
        const response = await fetch(`https://test-api.codingbootcamp.cz/api/e99fe155/events`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log('Error:', error)
    }
}
export { getData }
