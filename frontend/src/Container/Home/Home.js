import "./Home.css";
import Header from "../../Components/Header/Header";
import Maincontent from "../../Components/Maincontent/maincontent";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
};

export default Home;
