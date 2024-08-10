import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StoreStar = ({ onRatingChange, stars }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(stars);

  return (
    <>
      <div className=" flex">
        {[...Array(5)].map((Stars, index) => {
          const currentRating = index + 1;

          return (
            <label>
              <FaStar
                
                size={15}
                color={currentRating <= stars ? "#ffc107" : "grey"}
              ></FaStar>
            </label>
          );
        })}{" "}
      </div>
    </>
  );
};
export default StoreStar;
