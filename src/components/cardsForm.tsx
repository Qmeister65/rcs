import React from 'react';
import { FormProps, FormState, Validation, ValidationError } from '@/types';
import InputField from '@/components/inputField';
import Form from '@/components/form';
import './cardsForm.scss';

class CardsForm extends React.Component<FormProps, FormState> {
  state: FormState = {
    errors: [],
  };
  errorsArr: Validation[] = [
    () => {
      return !!this.props.nameRef.current?.value
        ? undefined
        : {
            id: 'name',
            message: 'Error',
          };
    },
    () => {
      return !!this.props.countRef.current?.value
        ? undefined
        : {
            id: 'count',
            message: 'Error',
          };
    },
    () => {
      return !!this.props.dateRef.current?.value
        ? undefined
        : {
            id: 'date',
            message: 'Error',
          };
    },
    () => {
      return this.props.shapeRef.current?.value !== ''
        ? undefined
        : {
            id: 'shape',
            message: 'Error',
          };
    },
    () => {
      return this.props.colorsRefs.filter((el) => el.ref.current?.checked).length
        ? undefined
        : {
            id: 'color',
            message: 'Error',
          };
    },
    () => {
      return !!this.props.sizesRefs.filter((el) => el.ref.current?.checked === true)[0]
        ? undefined
        : {
            id: 'size',
            message: 'Error',
          };
    },
    () => {
      return !!this.props.imageRef.current?.value
        ? undefined
        : {
            id: 'image',
            message: 'Error',
          };
    },
  ];

  findError = (name: string) => {
    const error = this.state.errors.filter((el) => el.id === name);
    return error.length ? error[0].message : undefined;
  };

  handleSubmit = () => {
    this.props.addCard();
  };

  onError = (errors: ValidationError[]) => {
    this.setState({ errors });
  };

  render() {
    return (
      <>
        <Form
          className="cardsForm"
          onError={this.onError}
          onSubmit={this.handleSubmit}
          validation={this.errorsArr}
          formRef={this.props.formRef}
        >
          <InputField
            id="name"
            label="Название"
            type="text"
            refProp={this.props.nameRef}
            error={this.findError('name')}
          />
          <InputField
            id="count"
            label="Количество"
            type="number"
            refProp={this.props.countRef}
            error={this.findError('count')}
          />
          <InputField
            id="date"
            label="Год выпуска"
            type="date"
            refProp={this.props.dateRef}
            error={this.findError('date')}
          />
          <label className="cardsForm-field" htmlFor="shape">
            <select id="shape" ref={this.props.shapeRef} defaultValue="">
              {this.props.shapes.map((el) => (
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
          {this.findError('shape') && (
            <span className="cardsForm__error">{this.findError('shape')}</span>
          )}
          <label className="cardsForm-field">
            <div className="cardsForm-field__multiple">
              {this.props.colorsRefs.map((el) => (
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
          {this.findError('color') && (
            <span className="cardsForm__error">{this.findError('color')}</span>
          )}
          <label className="cardsForm-field">
            <div className="cardsForm-field__multiple">
              {this.props.sizesRefs.map((el) => (
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
          {this.findError('size') && (
            <span className="cardsForm__error">{this.findError('size')}</span>
          )}
          <InputField
            id="img"
            label="Картинка для игрушки"
            type="file"
            refProp={this.props.imageRef}
            error={this.findError('image')}
            accept="image/*"
          />
          <InputField id="submit" type="submit" value="Submit" inputStyle="cardsForm__btn" />
        </Form>
      </>
    );
  }
}

export default CardsForm;
