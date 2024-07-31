import { useState } from "react";
import useDeleteStore from "../hooks/useDeleteStore";
import useUpdateStore from "../hooks/useUpdateStore";
import OurStores from "./sidebar/OurStores";
import MyStore from "../pages/myStore/MyStore";

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
  const [toggel, setToggle] = useState(false);
  const [toggelUpdate, setToggelUpdate] = useState(false);
  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            onClick={() => setToggle(!toggel)}
            data-dropdown-toggle="dropdown"
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 "
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
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
              id="dropdown"
              class="z-50 fixed justify-center text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    onClick={() => [
                      setToggelUpdate(!toggelUpdate),
                      setToggle(!toggel),
                    ]}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handelDelete}
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
              tabindex="-1"
              aria-hidden="true"
              class="overflow-y-auto overflow-x-hidden fixed top-5  left-5 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Edit Your Store
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-toggle="crud-modal"
                      onClick={() => setToggelUpdate(!toggelUpdate)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                      <div class="col-span-2">
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product name"
                          required=""
                          value={inputs.storename}
                          onChange={(e) =>
                            setInputs({ ...inputs, storename: e.target.value })
                          }
                        />
                      </div>
                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="price"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                          required=""
                        />
                      </div>
                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="category"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Category
                        </label>
                        <select
                          id="category"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected="">Select category</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Groceries">Groceries</option>
                          <option value="Medical">Medical</option>
                          <option value="Genral">Genral</option>
                        </select>
                      </div>
                      <div class="col-span-2">
                        <label
                          for="Address"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Address
                        </label>
                        <textarea
                          id="Address"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update Store
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {stores.storename}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {stores.address}
          </span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Rate
            </a>
            <a
              href="#"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyStoreCard;
