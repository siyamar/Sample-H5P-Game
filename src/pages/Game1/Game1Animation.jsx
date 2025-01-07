import { Link } from "react-router";

function Game1Animation() {
  return (
    <div className="my-2">
      {/* <div className="text-center font-bold text-7xl">Learning Part</div> */}
      <video
        className=" mx-auto my-4"
        width={900}
        autoPlay
        loop
        muted
        src="/public/animation1.mp4"
      ></video>
      <div className="text-right mr-16">
        <button className="btn  btn-secondary mr-2">
          {" "}
          <Link to={"/gamelevel"}>Back</Link>
        </button>
        <button className="btn  btn-secondary">
          {" "}
          <Link to={"/game1level1"}>Game Start</Link>
        </button>
      </div>
    </div>
  );
}

export default Game1Animation;
