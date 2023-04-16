import React, { useState } from 'react';
import './card.scss';
import { CardAPIProps } from '@/types';
import Popup from '@/components/popup';
import { Link } from 'react-router-dom';

const CardAPI: React.FC<CardAPIProps> = (props) => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  return (
    <>
      <div
        className="card"
        onClick={() => {
          setIsPopupShown(true);
        }}
      >
        <h3 className="card__name">{props.name}</h3>
        <div className="card-properties">
          <p className="card-properties__property">
            <b>Race: </b> {props.race}
          </p>
          <p className="card-properties__property">
            <b>Wiki: </b>
            <Link className="card-properties__link" to={props.wikiUrl}>
              link
            </Link>
          </p>
        </div>
      </div>
      {isPopupShown && (
        <Popup
          onClick={(event) => {
            if (event.currentTarget === event.target) setIsPopupShown(false);
          }}
        >
          <div
            className="card-popup__btn"
            onClick={() => {
              setIsPopupShown(false);
            }}
          >
            &#10006;
          </div>
          <div className="card-popup">
            <h3 className="card__name">{props.name}</h3>
            <div className="card-properties">
              <h4 className="card__name">Biographical information</h4>
              <p className="card-properties__property">
                <b>Birth: </b>
                {props.birth !== '' ? props.birth : '-'}
              </p>
              <p className="card-properties__property">
                <b>Death: </b>
                {props.death !== '' ? props.death : '-'}
              </p>
              <p className="card-properties__property">
                <b>Realm: </b>
                {props.realm !== '' ? props.realm : '-'}
              </p>
              <p className="card-properties__property">
                <b>Spouse: </b>
                {props.spouse !== '' ? props.spouse : '-'}
              </p>
              <h4 className="card__name">Physical description</h4>
              <p className="card-properties__property">
                <b>Race: </b> {props.race !== '' ? props.race : '-'}
              </p>
              <p className="card-properties__property">
                <b>Gender: </b>
                {props.gender !== '' ? props.gender : '-'}
              </p>
              <p className="card-properties__property">
                <b>Hair: </b>
                {props.hair !== '' ? props.hair : '-'}
              </p>
              <p className="card-properties__property">
                <b>Height: </b>
                {props.height !== '' ? props.height : '-'}
              </p>
              <Link className="card-properties__link" to={props.wikiUrl}>
                Wiki
              </Link>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export default CardAPI;
