import { useEffect, useState } from "react"


const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

export default function useCategoriesFetchApi() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

   const getApiData = async() => {
    const response = await fetch(`${VITE_CAT_API_URL}/breeds`)
    const Jresponse = await response.json();
    if(!response.ok) {
      setIsError(true)
      setError("veri alinamadi...")
      throw new Error("data couldn't get from server...")
    }
    setData(Jresponse);
    setIsLoading(false)
    console.log(Jresponse)
  }

  useEffect(() => {
    setTimeout(() => {
      getApiData()
    }, 1500);
  }, [])
  return [data, isLoading, isError, error]
}