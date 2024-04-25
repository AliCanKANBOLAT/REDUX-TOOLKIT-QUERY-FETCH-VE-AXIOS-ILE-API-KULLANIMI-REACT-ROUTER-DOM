import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";

const VITE_CAT_API_URL = import.meta.env.VITE_API_URL;

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const getApiData = async () => {
    try {
      const response = await fetch(`${VITE_CAT_API_URL}/breesds`);
      if (!response.ok) {
        setIsError(true);
        setError("Veri alınamadı");
        throw new Error("Veri alınamadı...");
      }
      const responseData = await response.json(); // Response tamamen alındığında json() metodu kullanılmalı
      console.log(responseData);
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      console.error("Hata oluştu:", error);
      setIsError(true);
      setError("Bir hata oluştu");
    }
  };

  useEffect(() => {
    setTimeout(() => getApiData(), 1500)
  }, []);

  return (
    <div className="col-sm-8 offset-sm-2">
      <h1>Ana Sayfa</h1>
      {isError?<h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
    </div>
  );
}
