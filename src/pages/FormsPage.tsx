import React from 'react';
import CardsForm from '@/components/cardsForm';
import CardsList from '@/components/cardsList';
import { FormPageState } from '@/types';
import { v4 as uuid } from 'uuid';

class FormsPage extends React.Component<Record<string, never>, FormPageState> {
  state: FormPageState = {
    cardList: [],
  };
  name = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  count = React.createRef<HTMLInputElement>();
  shape = React.createRef<HTMLSelectElement>();
  colorValues: string[] = ['белый', 'зеленый', 'красный', 'желтый', 'синий'];
  shapeValues: string[] = ['', 'шар', 'фигурка', 'колокольчик', 'шишка'];
  sizeValues: string[] = ['малый', 'средний', 'большой'];
  colors = this.colorValues.map((el) => {
    return {
      id: uuid(),
      value: el,
      ref: React.createRef<HTMLInputElement>(),
    };
  });
  sizes = this.sizeValues.map((el) => {
    return {
      id: uuid(),
      value: el,
      ref: React.createRef<HTMLInputElement>(),
    };
  });
  shapes = this.shapeValues.map((el) => {
    return {
      id: uuid(),
      value: el,
    };
  });
  img = React.createRef<HTMLInputElement>();

  addCard = () => {
    const file = this.img.current?.files ? this.img.current.files[0] : null;
    this.setState({
      cardList: [
        ...this.state.cardList,
        {
          num: uuid(),
          src: file ? URL.createObjectURL(file) : undefined,
          name: this.name.current?.value || 'Unknown',
          count: this.count.current?.value.toString() || '0',
          year: this.date.current?.value.toString() || Date.now().toString(),
          shape: this.shape.current?.value || 'das',
          color: this.colors
            .filter((el) => el.ref.current?.checked)
            .map((el) => el.value)
            .join(', '),
          size: this.sizes.filter((el) => el.ref.current?.checked === true)[0].value,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <CardsForm
          addCard={this.addCard}
          nameRef={this.name}
          countRef={this.count}
          dateRef={this.date}
          shapeRef={this.shape}
          shapes={this.shapes}
          colorsRefs={this.colors}
          sizesRefs={this.sizes}
          imageRef={this.img}
        />
        <CardsList data={this.state.cardList} />
      </div>
    );
  }
}

export default FormsPage;
