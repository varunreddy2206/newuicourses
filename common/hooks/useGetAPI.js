"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useGetAPI = (apiFunction, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiFunction(params);
        if (isMounted) setData(response.data || response);
      } catch (err) {
        if (isMounted) {
          setError(err);

          const message =
            err?.response?.data?.message ||
            err?.message ||
            "Something went wrong";

          toast.error(message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // component unmount ayite fetch cancel
    };
  }, [apiFunction, JSON.stringify(params)]);

  return { data, loading, error };
};
