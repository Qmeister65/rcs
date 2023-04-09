import React from 'react';
import { CardsFormProps, FormInputProps } from '@/types';
import InputField from '@/components/inputField';
import Form from '@/components/form';
import './cardsForm.scss';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

const CardsForm: React.FC<CardsFormProps> = ({ addCard, colors, shapes, sizes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputProps>();

  const submit = (data: FormInputProps) => {
    const file = data.image ? data.image[0] : null;
    addCard({
      num: uuid(),
      src: file ? URL.createObjectURL(file) : undefined,
      name: data.name,
      count: data.count.toString(),
      year: data.date.slice(0, 4),
      shape: data.shape,
      color: data.color.join(', '),
      size: data.size,
    });
    reset();
  };

  return (
    <>
      <Form className="cardsForm" onSubmit={handleSubmit(submit)}>
        <InputField
          register={() =>
            register('name', {
              required: 'Name should not be empty',
              maxLength: { value: 18, message: 'Name length should not be longer than 18 symbols' },
            })
          }
          name="name"
          id="name"
          label="Название"
          error={errors.name?.message}
        />
        <InputField
          register={() =>
            register('count', {
              required: 'Quantity should not be empty',
              min: {
                value: 1,
                message: 'Quantity should not be negative or zero',
              },
            })
          }
          name="count"
          id="count"
          label="Количество"
          type="number"
          error={errors.count?.message}
        />
        <InputField
          register={() => register('date', { required: 'Date should be selected' })}
          id="date"
          label="Год выпуска"
          type="date"
          name="date"
          error={errors.date?.message}
        />
        <label className="cardsForm-field" htmlFor="shape">
          <select
            id="shape"
            {...register('shape', { required: 'Shape should be selected' })}
            defaultValue=""
          >
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
        {errors.shape?.message && <span className="cardsForm__error">{errors.shape.message}</span>}
        <label className="cardsForm-field">
          <div className="cardsForm-field__multiple">
            {colors.map((el) => (
              <InputField
                register={() =>
                  register('color', { required: 'At least one color should be checked' })
                }
                key={el.id}
                name={'color'}
                id={'color' + el.id}
                label={el.value}
                type="checkbox"
                value={el.value}
              />
            ))}
          </div>
          Цвет
        </label>
        {errors.color?.message && <span className="cardsForm__error">{errors.color.message}</span>}
        <label className="cardsForm-field">
          <div className="cardsForm-field__multiple">
            {sizes.map((el) => (
              <InputField
                register={() => register('size', { required: 'Size should be selected' })}
                key={el.id}
                id={'radioGroup' + el.id}
                label={el.value}
                type="radio"
                value={el.value}
                name="size"
              />
            ))}
          </div>
          Размер
        </label>
        {errors.size?.message && <span className="cardsForm__error">{errors.size.message}</span>}
        <InputField
          register={() => register('image', { required: 'Image should be uploaded' })}
          name="image"
          id="img"
          label="Картинка для игрушки"
          type="file"
          error={errors.image?.message}
          accept="image/*"
        />
        <InputField id="submit" type="submit" value="Submit" inputStyle="cardsForm__btn" />
      </Form>
    </>
  );
};

export default CardsForm;
