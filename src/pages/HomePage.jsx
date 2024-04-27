import { useEffect } from "react";

const VITE_CAT_API_URL = import.meta.env.VITE_API_URL;

export default function HomePage() {
  useEffect(() => {
    fetch(import.meta.env.VITE_CAT_API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK...");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operator", error);
      });
  }, []);

  return <></>;
}
