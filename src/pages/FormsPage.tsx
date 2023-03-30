import React, { useRef, useState } from 'react';
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
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const shapeRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const colorsRefs = colorValues.map((el) => {
    return {
      id: uuid(),
      value: el,
      ref: React.createRef<HTMLInputElement>(),
    };
  });
  const sizesRefs = sizeValues.map((el) => {
    return {
      id: uuid(),
      value: el,
      ref: React.createRef<HTMLInputElement>(),
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
  const addCard = () => {
    const file = imageRef.current?.files ? imageRef.current.files[0] : null;
    invertPopup(true);
    setCardList([
      ...cardList,
      {
        num: uuid(),
        src: file ? URL.createObjectURL(file) : undefined,
        name: nameRef.current?.value || '',
        count: countRef.current?.value || '',
        year: dateRef.current?.value.slice(0, 4) || '',
        shape: shapeRef.current?.value || '',
        color: colorsRefs
          .filter((el) => el.ref.current?.checked)
          .map((el) => el.value)
          .join(', '),
        size: sizesRefs.filter((el) => el.ref.current?.checked === true)[0].value,
      },
    ]);
    formRef.current?.reset();
  };
  const invertPopup = (isPopupShown: boolean): void => setIsPopupShown(isPopupShown);
  const hidePopup = () => invertPopup(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CardsForm
        formRef={formRef}
        addCard={addCard}
        nameRef={nameRef}
        countRef={countRef}
        dateRef={dateRef}
        shapeRef={shapeRef}
        shapes={shapes}
        colorsRefs={colorsRefs}
        sizesRefs={sizesRefs}
        imageRef={imageRef}
      />
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
