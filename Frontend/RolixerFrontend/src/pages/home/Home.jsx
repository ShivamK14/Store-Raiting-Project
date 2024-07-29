import Card from "../../components/Card";
import MessageContainer from "../../components/messages/MessageContainer";
import Navbar from "../../components/Navbar";
import LogoutButton from "../../components/sidebar/LogoutButton";
import Sidebar from "../../components/sidebar/Sidebar";
import Stores from "../../components/sidebar/stores";
const Home = () => {
  return (
    <>
      <Navbar />
      <Stores />
    </>
  );
};
export default Home;
