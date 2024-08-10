import { useEffect, useState } from "react";

import toast from "react-hot-toast";

const useGetMyStores = () => {
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getmystores = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/store/");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setStores(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getmystores();
  }, []);

  return { loading, stores };
};
export default useGetMyStores;
