import { useState } from "react";
import Navbar from "../../components/Navbar";
import useCreateStore from "../../hooks/useCreateStore";

const CreateStore2 = () => {
  const [inputs, setInputs] = useState({
    storename: "",
    address: "",
  });

  const { loading, createstore } = useCreateStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createstore(inputs);
  };
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar />
    </>
  );
};
export default CreateStore2;
