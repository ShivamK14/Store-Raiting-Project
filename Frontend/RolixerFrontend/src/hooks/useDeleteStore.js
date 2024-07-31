import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteStore = () => {
  const [loading, setLoading] = useState(false);

  const deletestore = async (id) => {
    console.log("in delete", id);
    try {
      const res = await fetch(`/api/store/${id}`, {
        method: "DELETE",
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

  return { loading, deletestore };
};
export default useDeleteStore;
