import { Link, useParams } from "react-router";

function Game1Level1() {
  const { id } = useParams();
  return (
    <div className="my-10">
      <div className="text-center font-bold text-3xl">Level-1</div>
      <iframe
        className="mt-10 mx-auto"
        src="https://abdur.h5p.com/content/1292455266559061157/embed"
        aria-label="Cyber Security Game...!"
        width="1188"
        height="237"
        allowfullscreen="allowfullscreen"
        allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
      ></iframe>
      <script src="https://abdur.h5p.com/js/h5p-resizer.js"></script>
      <div className="text-right mr-16">
        <button className="btn  btn-secondary mr-2">
          {" "}
          <Link to={`/gameLevel/${id}`}>Back</Link>
        </button>
        <button className="btn  btn-secondary">
          {" "}
          <Link to={"/game1level2"}>Next</Link>
        </button>
      </div>
    </div>
  );
}

export default Game1Level1;
