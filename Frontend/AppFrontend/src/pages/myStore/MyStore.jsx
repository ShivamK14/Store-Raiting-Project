import CreateNewStore from "../../components/CreateNewStore";
import Navbar from "../../components/Navbar";
import OurStores from "../../components/sidebar/OurStores";
// import MyStore from "../../components/sidebar/MyStores";

const MyStore = () => {
  return (
    <>
      <Navbar />
      <div className="pt-40 gap-5 md:pt-2">
        <CreateNewStore />
        <OurStores />
      </div>
    </>
  );
};
export default MyStore;
