import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  console.log(game);

  useEffect(() => {
    // Fetch JSON data using Axios
    axios
      .get("/public/gameLevel.json") // Fetches from the public folder
      .then((response) => {
        const selectedGame = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setGame(selectedGame); // Set the data in state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);
  return (
    <div className="my-2">
      <div className="text-center font-bold text-5xl my-8">{game?.title}</div>
      <video
        className=" mx-auto my-4"
        width={900}
        autoPlay
        loop
        muted
        src={game?.videoUrl}
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

export default GameDetails;
