import { useEffect, useState } from "react"

export const useFetchMovies = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result = await data.json()
            setData(result)
            setLoading(false)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error }
}