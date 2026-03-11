import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T[];
  loading: boolean;
}

export default function useFetch<T>(
  fetchFunc: () => Promise<T[]>,
  delay: number = 0,
): UseFetchResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await fetchFunc();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setLoading(false);
      }
    };

    if (delay > 0) {
      setTimeout(fetchData, delay);
    } else {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [fetchFunc, delay]);

  return { data, loading };
}
