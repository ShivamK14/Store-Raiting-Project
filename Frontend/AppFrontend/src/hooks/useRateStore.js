import { useState } from "react";
import toast from "react-hot-toast";

const useRateStore = () => {
  const [loading, setLoading] = useState(false);

  const ratestore = async ({ stars, userId, review }) => {
    console.log("in Rate", stars, userId, review);
    try {
      const res = await fetch("/api/store/allstroes/ratings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stars, userId, review }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, ratestore };
};
export default useRateStore;
