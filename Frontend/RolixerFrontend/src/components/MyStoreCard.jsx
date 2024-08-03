import { useEffect, useRef, useState } from "react";
import useDeleteStore from "../hooks/useDeleteStore";
import useUpdateStore from "../hooks/useUpdateStore";
import OurStores from "./sidebar/OurStores";
import MyStore from "../pages/myStore/MyStore";
import RatingCard from "./RatingCard";
const MyStoreCard = ({ stores, lastIdx, emoji }) => {
  const [inputs, setInputs] = useState({
    storename: stores.storename,
    address: stores.address,
  });
  // const isSelected = selectedStores?._id === stores._id;
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers.includes(stores._id);

  const { loading, deletestore } = useDeleteStore();
  const { updatestore } = useUpdateStore();
  const handelDelete = async (e) => {
    e.preventDefault();
    setToggle(!toggel);
    await deletestore(stores._id);
  };
  const handelUpdate = async (e) => {
    e.preventDefault();
    setToggelUpdate(!toggelUpdate);

    await updatestore(inputs, stores._id);
  };
  const ref = useRef(null);

  const [toggel, setToggle] = useState(false);
  const [toggelUpdate, setToggelUpdate] = useState(false);
  const [toggelRating, setToggelRating] = useState(false);
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            onClick={() => setToggle(!toggel)}
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 "
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {toggel && (
            <div
              ref={ref}
              id="dropdown"
              className="z-50 fixed justify-center text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    onClick={() => [
                      setToggelUpdate(!toggelUpdate),
                      setToggle(!toggel),
                    ]}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={handelDelete}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          )}
          {toggelUpdate && (
            <div
              id="crud-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="overflow-y-auto overflow-x-hidden fixed top-5  left-5 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Edit Your Store
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-toggle="crud-modal"
                      onClick={() => setToggelUpdate(!toggelUpdate)}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product name"
                          required=""
                          value={inputs.storename}
                          onChange={(e) =>
                            setInputs({ ...inputs, storename: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          for="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                          required=""
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          for="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Category
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected="">Select category</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Groceries">Groceries</option>
                          <option value="Medical">Medical</option>
                          <option value="Genral">Genral</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label
                          for="Address"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Address
                        </label>
                        <textarea
                          id="Address"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write Store Address here"
                          value={inputs.address}
                          onChange={(e) =>
                            setInputs({ ...inputs, address: e.target.value })
                          }
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={handelUpdate}
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update Store
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={stores.storePic}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {stores.storename}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {stores.address}
          </span>{" "}
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {stores.total_star}
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              onClick={() => setToggelRating(!toggelRating)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Rate
            </a>

            <RatingCard
              key={stores._id}
              stores={stores}
              trigger={toggelRating}
              setTigger={setToggelRating}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyStoreCard;
