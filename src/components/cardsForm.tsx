import React, { useState } from 'react';
import { CardsFormProps, Validation, ValidationError } from '@/types';
import InputField from '@/components/inputField';
import Form from '@/components/form';
import './cardsForm.scss';

const CardsForm: React.FC<CardsFormProps> = ({
  addCard,
  colorsRefs,
  countRef,
  dateRef,
  formRef,
  imageRef,
  nameRef,
  shapeRef,
  shapes,
  sizesRefs,
}) => {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const errorsArr: Validation[] = [
    () => {
      return !!nameRef.current?.value
        ? nameRef.current.value.length < 18
          ? undefined
          : {
              id: 'name',
              message: 'Name length should not be longer than 18 symbols',
            }
        : {
            id: 'name',
            message: 'Name should not be empty',
          };
    },
    () => {
      return !!countRef.current?.value
        ? +countRef.current.value > 0
          ? undefined
          : +countRef.current.value === 0
          ? {
              id: 'count',
              message: 'Quantity should not be zero',
            }
          : {
              id: 'count',
              message: 'Quantity should not be negative',
            }
        : {
            id: 'count',
            message: 'Quantity should not be empty',
          };
    },
    () => {
      return !!dateRef.current?.value
        ? undefined
        : {
            id: 'date',
            message: 'Date should be selected',
          };
    },
    () => {
      return shapeRef.current?.value !== ''
        ? undefined
        : {
            id: 'shape',
            message: 'Shape should be selected',
          };
    },
    () => {
      return colorsRefs.filter((el) => el.ref.current?.checked).length
        ? undefined
        : {
            id: 'color',
            message: 'At least one color should be checked',
          };
    },
    () => {
      return !!sizesRefs.filter((el) => el.ref.current?.checked === true)[0]
        ? undefined
        : {
            id: 'size',
            message: 'Size should be selected',
          };
    },
    () => {
      return !!imageRef.current?.value
        ? undefined
        : {
            id: 'image',
            message: 'Image should be uploaded',
          };
    },
  ];

  const findError = (name: string) => {
    const error = errors.filter((el) => el.id === name);
    return error.length ? error[0].message : undefined;
  };

  const handleSubmit = () => {
    addCard();
  };

  const onError = (errors: ValidationError[]) => {
    setErrors(errors);
  };

  return (
    <>
      <Form
        className="cardsForm"
        onError={onError}
        onSubmitProp={handleSubmit}
        validation={errorsArr}
        formRef={formRef}
      >
        <InputField
          id="name"
          label="Название"
          type="text"
          refProp={nameRef}
          error={findError('name')}
        />
        <InputField
          id="count"
          label="Количество"
          type="number"
          refProp={countRef}
          error={findError('count')}
        />
        <InputField
          id="date"
          label="Год выпуска"
          type="date"
          refProp={dateRef}
          error={findError('date')}
        />
        <label className="cardsForm-field" htmlFor="shape">
          <select id="shape" ref={shapeRef} defaultValue="">
            {shapes.map((el) => (
              <option
                key={el.id}
                value={el.value}
                disabled={el.value === ''}
                hidden={el.value === ''}
              >
                {el.value}
              </option>
            ))}
          </select>
          Форма
        </label>
        {findError('shape') && <span className="cardsForm__error">{findError('shape')}</span>}
        <label className="cardsForm-field">
          <div className="cardsForm-field__multiple">
            {colorsRefs.map((el) => (
              <InputField
                key={el.id}
                id={'color' + el.id}
                label={el.value}
                type="checkbox"
                value={el.value}
                refProp={el.ref}
              />
            ))}
          </div>
          Цвет
        </label>
        {findError('color') && <span className="cardsForm__error">{findError('color')}</span>}
        <label className="cardsForm-field">
          <div className="cardsForm-field__multiple">
            {sizesRefs.map((el) => (
              <InputField
                key={el.id}
                id={'radioGroup'}
                label={el.value}
                type="radio"
                value={el.value}
                refProp={el.ref}
              />
            ))}
          </div>
          Размер
        </label>
        {findError('size') && <span className="cardsForm__error">{findError('size')}</span>}
        <InputField
          id="img"
          label="Картинка для игрушки"
          type="file"
          refProp={imageRef}
          error={findError('image')}
          accept="image/*"
        />
        <InputField id="submit" type="submit" value="Submit" inputStyle="cardsForm__btn" />
      </Form>
    </>
  );
};

export default CardsForm;
