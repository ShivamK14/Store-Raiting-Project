import useGetStores from "../../hooks/useGetStores";
import { getRandomEmoji } from "../../utils/emojis";
// import Conversation from "./Conversation";
import Card from "../Card";
const stores = () => {
  const { loading, stores } = useGetStores();

  return (
    <div class=" flex   p-10 gap-5 ">
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
