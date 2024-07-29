import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetStores = () => {
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getstores = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/store/allstroes");
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

    getstores();
  }, []);

  return { loading, stores };
};
export default useGetStores;
