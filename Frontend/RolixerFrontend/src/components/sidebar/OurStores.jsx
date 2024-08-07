import useGetMyStores from "../../hooks/useGetMyStores";
import useGetStores from "../../hooks/useGetStores";
import { getRandomEmoji } from "../../utils/emojis";
// import Conversation from "./Conversation";
import Card from "../Card";
import MyStoreCard from "../MyStoreCard";
const OurStores = () => {
  const { loading, stores } = useGetMyStores();

  return (
    <div className=" p-5 flex justify-center flex-wrap gap-7">
      {stores.map((store, idx) => (
        <MyStoreCard
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
export default OurStores;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const stroes = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default stroes;
