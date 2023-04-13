import './Home.css';
import { Link } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="main">
      <h1>
        <Link
          to="/figures"
          style={{ color: '#ffd700', textDecoration: 'none' }}
        >
          Tesoros
          <br />
          Especulativos
        </Link>
      </h1>

      <div className="fullscreen">
        <div className="video">
          <div className="vimeo-wrapper">
            <iframe
              src="https://player.vimeo.com/video/422525332?h=ef2edf5068&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&playsinline=0&muted=1"
              width="480"
              height="320"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="plus">+</div>
    </div>
  );
};

export default Home;
