import React from 'react';
import './card.scss';
import { CardProps } from '@/types';

class Card extends React.Component<CardProps, Record<string, never>> {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.src ? this.props.src : `./src/assets/toys/${this.props.num}.png`}
          className="card__img"
          alt={this.props.num}
        ></img>
        <div className="card-properties">
          <h3 className="card__name">{this.props.name}</h3>
          <p className="card-properties__property">Количество: {this.props.count}</p>
          <p className="card-properties__property">Год выпуска: {this.props.year}</p>
          <p className="card-properties__property">Тип игрушки: {this.props.shape}</p>
          <p className="card-properties__property">Цвет: {this.props.color}</p>
          <p className="card-properties__property">Размер: {this.props.size}</p>
        </div>
      </div>
    );
  }
}

export default Card;
