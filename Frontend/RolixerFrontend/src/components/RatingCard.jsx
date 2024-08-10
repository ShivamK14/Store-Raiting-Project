import { useState } from "react";
import useCreateStore from "../hooks/useCreateStore";
import useRateStore from "../hooks/useRateStore";
import stores from "./sidebar/stores";
import Card from "./Card";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Star from "./StarRating";

const RatingCard = ({ stores, trigger, setTigger }) => {
  const [inputs, setInputs] = useState({
    stars: stores.total_star,
    userId: stores._id,
    review: stores.ratings.review,
  });

  const { loading, ratestore } = useRateStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTigger(false);
    await ratestore(inputs);
  };
  const handleRatingChange = (stars) => {
    setInputs({ ...inputs, stars });
  };

  return (
    <>
      {trigger && (
        <div className=" md:fixed z-50 justify-center items-center  backdrop-blur-sm md:inset-0 absolute">
          <div className="sm:py-10 sm:max-w-xl sm:mx-auto ">
            <div className="dark:bg-gray-800 dark:border-gray-700  flex flex-col rounded-xl shadow-lg border border-gray-700">
              <div className="px-10 py-5">
                <h2 className="text-gray-300 text-xl font-semibold">
                  Your opinion matters to us!
                </h2>
              </div>
              <div className="bg-gray-900 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-lg text-gray-100 font-semibold">
                    How is this store!!
                  </span>

                  <Star
                    onRatingChange={handleRatingChange}
                    stars={inputs.stars}
                  />
                </div>
                <div className="w-3/4 flex flex-col">
                  <textarea
                    rows="3"
                    value={inputs.review}
                    onChange={(e) =>
                      setInputs({ ...inputs, review: e.target.value })
                    }
                    placeholder="Write a review"
                    className="p-4 text-gray-100 rounded-xl resize-none bg-slate-800"
                  ></textarea>
                  <button
                    onClick={handleSubmit}
                    className="py-3 my-8 text-sm text-center bg-blue-700 rounded-lg text-white focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-800 dark:hover:bg-blue-800 dark:focus:ring-blue-800  font-semibold"
                  >
                    Rate now
                  </button>
                </div>
              </div>
              <div
                onClick={() => setTigger(false)}
                className="h-20 flex items-center justify-center cursor-pointer"
              >
                <a className="text-gray-300">Maybe later</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-5  left-5 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Store
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-toggle="crud-modal"
                onClick={() => setToggle(!toggle)}
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
                    htmlFor="name"
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
                onClick={handleSubmit}
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add New Store
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default RatingCard;
