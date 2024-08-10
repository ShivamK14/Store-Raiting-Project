import SpecificReview from "./SpecificReviews";
import StoreStar from "./StoreStar";

const AllReviews = ({ stores, allReviewstrigger, setAllReviewsTigger }) => {
  return (
    <>
      {allReviewstrigger && (
        <div className="md:fixed  z-50 justify-center  items-center backdrop-blur-sm md:inset-0  absolute  max-h-full  ">
          <section className="bg-white sm:m-10 sm:p-10 p-2 dark:bg-gray-900  sm:max-w-2xl sm:mx-auto  rounded-lg md:inset-0  overflow-auto sm:fixed border border-gray-700">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Reviews
                </h2>
                <div className="mt-2 flex items-center gap-2 sm:mt-0">
                  <StoreStar stars={stores.total_star} />
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    {stores.total_star}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    {" "}
                    {stores.ratings.length} Reviews{" "}
                  </a>
                </div>{" "}
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-toggle="crud-modal"
                  onClick={() => setAllReviewsTigger(false)}
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
              {stores.ratings.map((ratings) => (
                <SpecificReview ratings={ratings} />
              ))}

              <div className="mt-6 text-center">
                {/* <button
                  type="button"
                  className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  View more reviews
                </button> */}
              </div>
            </div>
          </section>

          <div
            id="review-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased"
          >
            {" "}
          </div>
        </div>
      )}
    </>
  );
};

export default AllReviews;
