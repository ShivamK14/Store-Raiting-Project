import { useState } from "react";
import Navbar from "../../components/Navbar";
import useCreateStore from "../../hooks/useCreateStore";

const CreateStore = () => {
  const [inputs, setInputs] = useState({
    storename: "",
    address: "",
  });

  const { loading, createstore } = useCreateStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createstore(inputs);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Create <span className="text-blue-500"> Store</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">storename</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered  h-10"
                value={inputs.storename}
                onChange={(e) =>
                  setInputs({ ...inputs, storename: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label p-2 ">
                <span className="text-base label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10"
                value={inputs.address}
                onChange={(e) =>
                  setInputs({ ...inputs, address: e.target.value })
                }
              />
            </div>

            <div>
              <button
                className="btn btn-block btn-sm mt-2 border border-slate-700"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      );
    </>
  );
};
export default CreateStore;
