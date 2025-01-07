import { Link } from "react-router";

function Game3() {
  return (
    <div className="my-10">
      <div className="text-center font-bold text-3xl">This is Game page!!</div>
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
      <iframe
        className="mt-10 mx-auto"
        src="https://abdur.h5p.com/content/1292462066760392687/embed"
        aria-label="Cyber Security Game...!"
        width="1188"
        height="337"
        frameBorder="0"
        allowfullscreen="allowfullscreen"
        allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
      ></iframe>
      <script src="https://abdur.h5p.com/js/h5p-resizer.js"></script>
      <div className="text-right mr-16">
        <button className="btn  btn-secondary">
          {" "}
          <Link to={"/play"}>Next</Link>
        </button>
      </div>
    </div>
  );
}

export default Game3;
