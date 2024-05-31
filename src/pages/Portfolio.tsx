import "./Portfolio.css";
import { Link } from "react-router-dom";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="title">
        <h1>
          <Link to={"/"} style={{ color: "#ffd700", textDecoration: "none" }}>
            Tesoros <br></br> Especulativos
          </Link>
        </h1>
      </div>
      <div className="figures">
        <Link to={"/gan"}>
          <div className="shading">
            <img
              src="/TE_12-removebg-preview.png"
              alt="GAN3D"
              height="300px"
              width=""
            />
          </div>
        </Link>

        <div className="shading">
          <img
            src="/TE_06-removebg-preview.png"
            alt="GAN3D"
            height="300px"
            width=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
