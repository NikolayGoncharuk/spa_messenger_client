import React from 'react';

export default function useSocket(array, profile, searchValue, action) {
  React.useEffect(() => {
    const allArray = array;

    // Убираем из массива авторизованного пользователя если от есть
    allArray.forEach((item) => {
      if (item.participantsObj) {
        item.participantsObj = item.participantsObj.filter((item) => {
          return item._id !== profile._id;
        });
      };
    });

    // Ищем совпадения по значению поиска
    const filteredArray = allArray.filter((item) => {
      debugger
      let firstName = '';
      let lastName = '';
      if (item.participantsObj) {
        firstName = item.participantsObj[0].firstName;
        lastName = item.participantsObj[0].lastName;
      } else {
        firstName = item.firstName;
        lastName = item.lastName;
      };
      const variant1 = `${firstName} ${lastName}`;
      const variant2 = `${lastName} ${firstName}`;
      const regExp = new RegExp(searchValue, 'i');
      return regExp.test(variant1) || regExp.test(variant2);
    });

    action(filteredArray);
  }, [searchValue]);
};