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
      <div id="about">
        <h2>Tesoros especulativos</h2>
        <p>
          se basa en una Red Adversaria Generativa (GAN) que está entrenada para
          reconstruir modelos de artefactos arqueológicos del Tesoro de
          Quimbaya. Los modelos son generados por un algoritmo de aprendizaje
          automático, diseñado para interpretar nuevas posibilidades formales a
          partir de una imagen 2D del objeto original. Utilizando una base de
          datos de objetos escaneados en el Museo del Oro, se entrenó a una red
          neuronal GAN, con el fin de que aprenda a esculpir nuevos artefactos
          cuyas cualidades volumétricas los aproximen plásticamente a El Tesoro
          Quimbaya en posesión del Museo de América en Madrid.
          <br></br>
          Los resultados de este proceso especulativo son 6 objetos en 3D, que
          se enmarcan dentro del materialismo especulativo, ya que son objetos
          tridimensionales que pueden tomar diferentes materialidades desde la
          impresión 3D, hasta las realidades aumentadas.
        </p>
      </div>
    </div>
  );
};

export default Home;
