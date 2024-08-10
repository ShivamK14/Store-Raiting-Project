import { useState } from "react";
import RatingCard from "./RatingCard";
import AllReviews from "./AllReviews";
import Stargreylogo from "../assets/Stargrey.svg";
import StoreStar from "./StoreStar";
const Card = ({ stores, lastIdx, emoji }) => {
  // const isSelected = selectedStores?._id === stores._id;
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers.includes(stores._id);
  const [toggelRating, setToggelRating] = useState(false);
  const [toggelAllRating, setToggelAllRating] = useState(false);
  const handelAllReview = () => {
    return;
  };
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img
            className="p-8 rounded-t-lg"
            src={stores.storePic}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {stores.storename}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <StoreStar stars={stores.total_star} />
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {stores.total_star}
            </span>
          </div>

          <div className="flex items-center justify-between">
            {/* <span className="text-l font-bold text-gray-900 dark:text-white">
              {stores.address}
            </span> */}
            <a
              onClick={() => setToggelAllRating(!toggelAllRating)}
              className="text-white   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center  hover:text-blue-500 dark:focus:ring-blue-800 cursor-pointer"
            >
              Reviews
            </a>
            <a
              onClick={() => setToggelRating(!toggelRating)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Rate Store
            </a>
            <AllReviews
              key={stores._id + "review"}
              stores={stores}
              allReviewstrigger={toggelAllRating}
              setAllReviewsTigger={setToggelAllRating}
            />
            <RatingCard
              key={stores._id + "rate "}
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
export default Card;
