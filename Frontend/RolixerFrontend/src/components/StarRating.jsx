import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ onRatingChange, stars }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(null);

  return (
    <>
      <div className=" flex">
        {[...Array(5)].map((Stars, index) => {
          const currentRating = index + 1;

          return (
            <label>
              <input
                class="hidden"
                type="radio"
                name="rating"
                id="starRating"
                value={currentRating}
                onClick={() => onRatingChange(currentRating)}
              />
              <FaStar
                class="cursor-pointer"
                size={50}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                color={currentRating <= (hover || stars) ? "#ffc107" : "grey"}
              ></FaStar>
            </label>
          );
        })}{" "}
      </div>
    </>
  );
};
export default Star;
