import CreateNewStore from "../../components/CreateNewStore";
import Navbar from "../../components/Navbar";
import OurStores from "../../components/sidebar/OurStores";
// import MyStore from "../../components/sidebar/MyStores";

const MyStore = () => {
  return (
    <>
      <Navbar />
      <CreateNewStore />
      <OurStores />
    </>
  );
};
export default MyStore;
