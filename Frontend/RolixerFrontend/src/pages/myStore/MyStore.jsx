import CreateNewStore from "../../components/CreateNewStore";
import Navbar from "../../components/Navbar";
import OurStores from "../../components/sidebar/OurStores";
// import MyStore from "../../components/sidebar/MyStores";

const MyStore = () => {
  return (
    <>
      <Navbar />
      <div className="p-2 gap-5 ">
        <CreateNewStore />
        <OurStores />
      </div>
    </>
  );
};
export default MyStore;
