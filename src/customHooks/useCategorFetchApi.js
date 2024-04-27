import { useEffect, useState } from "react"


const URL = import.meta.env.VITE_CAT_API_URL
const KEY = import.meta.env.VITE_CAT_API_KEY

export default function useCategoryFetchApi(categoryName) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

   const getApiData = async() => {
    const fetchInfo = {
      headers: {
        "x-api-key": KEY
      }
    }
    const response = await fetch(`${URL}/images/search?limit=10&breed_ids=${categoryName}`,
    fetchInfo 
    )
    const Jresponse = await response.json();
    if(!response.ok) {
      setIsError(true)
      setError("veri alinamadi...")
      throw new Error("data couldn't get from server...")
    }
    setData(Jresponse)
    setIsLoading(false)

  }

  useEffect(() => {
    
      getApiData()
    
  }, [])
  return [data, isLoading, isError, error]
}