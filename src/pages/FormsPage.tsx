import React, { useState } from 'react';
import CardsForm from '@/components/cardsForm';
import Popup from '@/components/popup';
import ConfirmationMessage from '@/components/confirmationMessage';
import CardsList from '@/components/cardsList';
import { v4 as uuid } from 'uuid';
import { CardProps } from '@/types';

const FormsPage: React.FC = () => {
  const colorValues: string[] = ['белый', 'зеленый', 'красный', 'желтый', 'синий'];
  const shapeValues: string[] = ['', 'шар', 'фигурка', 'колокольчик', 'шишка'];
  const sizeValues: string[] = ['малый', 'средний', 'большой'];
  const colors = colorValues.map((el) => {
    return {
      id: uuid(),
      value: el,
    };
  });
  const sizes = sizeValues.map((el) => {
    return {
      id: uuid(),
      value: el,
    };
  });
  const shapes = shapeValues.map((el) => {
    return {
      id: uuid(),
      value: el,
    };
  });
  const [cardList, setCardList] = useState<CardProps[]>([]);
  const [isPopupShown, setIsPopupShown] = useState(false);
  const addCard = (card: CardProps) => {
    invertPopup(true);
    setCardList([...cardList, card]);
  };
  const invertPopup = (isPopupShown: boolean): void => setIsPopupShown(isPopupShown);
  const hidePopup = () => invertPopup(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CardsForm addCard={addCard} shapes={shapes} colors={colors} sizes={sizes} />
      {isPopupShown && (
        <Popup>
          <ConfirmationMessage onClick={hidePopup} />
        </Popup>
      )}
      <CardsList data={cardList} />
    </div>
  );
};

export default FormsPage;
