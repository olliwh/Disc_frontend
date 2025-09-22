import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

//my api returns a direct array of employees, not an object with a results property
//so I changed Response to T[] and res.data.results to res.data

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    
    apiClient
      .get<T[]>(endpoint, { signal: controller.signal })  
      .then((res) => {
        setData(res.data);  
        setIsLoading(false);
        console.log('res');
        console.log(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.log(err);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  
  return { data, error, isLoading };
};

export default useData;