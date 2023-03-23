import React from 'react';
import { Link } from 'react-router-dom';
import './Gan.css';

type Props = {};

const images = [
  'src/assets/TE_01-removebg-preview.png',
  'src/assets/TE_02-removebg-preview.png',
  'src/assets/TE_03-removebg-preview.png',
  'src/assets/TE_12-removebg-preview.png',
  'src/assets/TE_05-removebg-preview.png',
  'src/assets/TE_06-removebg-preview.png',
  'src/assets/TE_11-removebg-preview.png',
  'src/assets/TE_08-removebg-preview.png',
  'src/assets/TE_09-removebg-preview.png',
];

const Gan = (props: Props) => {
  return (
    <div className="root">
      <div className="title">
        <Link to="/" style={{ color: '#ffd700', textDecoration: 'none' }}>
          <h1>
            Tesoros
            <br />
            Especulativos
          </h1>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <div className="grid">
          {images.map((imageUrl) => {
            return (
              <div key={imageUrl}>
                <img
                  src={imageUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="GAN3D">
        <a href="../index.html" target="">
          <img
            src="src/assets/icon_3D.png"
            alt="GAN3D"
            style={{
              height: '100px',
              borderRadius: '50%',
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Gan;
