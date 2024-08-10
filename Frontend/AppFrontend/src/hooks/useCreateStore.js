import { useState } from "react";
import toast from "react-hot-toast";

const useCreateStore = () => {
  const [loading, setLoading] = useState(false);

  const createstore = async ({ storename, address }) => {
    const success = handleInputErrors({
      storename,
      address,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/store/", {
        method: "POST",
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
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createstore };
};
export default useCreateStore;

function handleInputErrors({ storename, address }) {
  if (!storename || !storename) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
