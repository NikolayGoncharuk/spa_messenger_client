export const required = (value) => {
  if (!value) {
    return 'Обязательное поле';
  } else {
    return undefined;
  };
};

const minLengthCreator = (min) => (value) => {
  if (value && value.length < min) {
    return `Минимум ${min} символ${(min === 1) ? '' : (min > 1 && min < 5) ? 'а' : 'ов'}`;
  } else {
    return undefined;
  };
};
export const minLength = minLengthCreator(6)

const maxLength = (max) => (value) => {
  if (value && value.length > max) {
    return `Не более ${max} символов`;
  } else {
    return undefined;
  };
};
export const maxLengthCreator = maxLength(15)

export const number = (value) => {
  if (value && isNaN(Number(value))) {
    return 'Разрешены только цифры';
  } else {
    return undefined;
  };
};

export const email = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Неверный адрес электронной почты';
  } else {
    return undefined;
  };
};

const tooYoung = (age) => (value) => {
  if (value && value < age) {
    return `Только для лиц старше ${age} лет`;
  } else {
    return undefined;
  };
};
export const tooYoungCreator = tooYoung(18)

export const aol = (value) => {
  if (value && /.+@aol\.com/.test(value)) {
    return 'В самом деле? Вы все еще используете AOL для своей электронной почты?';
  } else {
    return undefined;
  };
};

export const alphaNumeric = (value) => {
  if (value && /[^a-zA-Z0-9 ]/i.test(value)) {
    return 'Только буквенно-цифровые символы';
  } else {
    return undefined;
  };
};

export const phoneNumber = (value) => {
  if (value && !/^(0|[1-9][0-9]{9})$/i.test(value)) {
    return 'Неверный номер телефона, должен быть 10 цифр';
  } else {
    return undefined;
  };
};