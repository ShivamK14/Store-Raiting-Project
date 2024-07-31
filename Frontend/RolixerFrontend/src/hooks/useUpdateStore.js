import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateStore = () => {
  const [loading, setLoading] = useState(false);

  const updatestore = async ({ storename, address },id) => {
    const success = handleInputErrors({
      storename,
      address,
    });
    if (!success) return;
    console.log("in Update", id);
    try {
      const res = await fetch(`/api/store/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          storename,
          address,
        }),
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

  return { loading, updatestore };
};
export default useUpdateStore;
function handleInputErrors({ storename, address }) {
  if (!storename || !storename) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
