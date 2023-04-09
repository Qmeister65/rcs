import React from 'react';
import './card.scss';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = (props) => (
  <div className="card">
    <img
      src={props.src ? props.src : `./src/assets/toys/${props.num}.png`}
      className="card__img"
      alt={props.num}
    ></img>
    <div className="card-properties">
      <h3 className="card__name">{props.name}</h3>
      <p className="card-properties__property">Количество: {props.count}</p>
      <p className="card-properties__property">Год выпуска: {props.year}</p>
      <p className="card-properties__property">Тип игрушки: {props.shape}</p>
      <p className="card-properties__property">Цвет: {props.color}</p>
      <p className="card-properties__property">Размер: {props.size}</p>
    </div>
  </div>
);

export default Card;
