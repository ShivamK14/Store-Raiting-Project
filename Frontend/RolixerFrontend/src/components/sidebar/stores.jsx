import useGetStores from "../../hooks/useGetStores";
import { getRandomEmoji } from "../../utils/emojis";
// import Conversation from "./Conversation";
import Card from "../Card";
const stores = () => {
  const { loading, stores } = useGetStores();

  return (
    <div className="flex justify-center flex-wrap gap-7">
      {stores.map((store, idx) => (
        <Card
          key={store._id}
          stores={store}
          emoji={getRandomEmoji()}
          lastIdx={idx === stores.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default stores;
