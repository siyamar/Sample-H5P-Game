import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import FunnyVideos from "../Components/FunnyVideos";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      {/* <div className="mx-8 mt-10 mb-2">This is Home!!!</div>
      <button className="btn btn-primary mx-8">
        <Link to={"/play"}>Play</Link>
      </button> */}
      <Navbar />
      <Banner />
      <FunnyVideos />
      <Footer />
    </div>
  );
}

export default Home;
