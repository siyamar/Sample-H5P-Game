import { Link } from "react-router";

function Home() {
  return (
    <div>
      <div className="mx-8 mt-10 mb-2">This is Home!!!</div>
      <button className="btn btn-primary mx-8">
        <Link to={"/play"}>Play</Link>
      </button>
    </div>
  );
}

export default Home;
