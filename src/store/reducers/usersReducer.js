const initialState = [
  {
    uuid: 'a1',
    firstName: 'Роджер',
    lastName: 'Гилл',
    isOnline: true,
    avatar: 'https://nashaplaneta.net/besopasnost/images/xmaccu-pikchu-selfi.jpg.pagespeed.ic._kKI--M36Z.jpg',
  },
  {
    uuid: 'a2',
    firstName: 'Александр',
    lastName: 'Честер',
    isOnline: false,
    avatar: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/10/selfie2_1571934228.jpg',
  },
  {
    uuid: 'a3',
    firstName: 'Стейси',
    lastName: 'Лонгман',
    isOnline: true,
    avatar: 'https://tv.ua/i/95/26/17/952617/6c4140a22bdee6fa7ea34aa3c58fac27-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg',
  },
  {
    uuid: 'a4',
    firstName: 'Памела',
    lastName: 'Флетчер',
    isOnline: false,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreatugeQMEaTGzfH-6rjPG29Nc-yyDz0f6hNK1I_HCuDh24b3nw&s',
  },
  {
    uuid: 'a5',
    firstName: 'Мэтью',
    lastName: 'Теренер',
    isOnline: true,
    avatar: 'https://lifehacker.ru/special/asus-zenfone/assets/i/main/cutted/1.jpg',
  },
  {
    uuid: 'a6',
    firstName: 'Офелия',
    lastName: 'Сивенсон',
    isOnline: false,
    avatar: 'https://images.unian.net/photos/2019_10/1571226804-8464.jpg?0.03891234063697757',
  },
  {
    uuid: 'a7',
    firstName: 'Диана',
    lastName: 'Брук',
    isOnline: true,
    avatar: 'https://www.vesty.co.il/PicServer5/2018/03/04/8384434/shutterstock_399031114.jpg',
  },
  {
    uuid: 'a8',
    firstName: 'Сара',
    lastName: 'Блэр',
    isOnline: false,
    avatar: 'https://condenast-media.gcdn.co/glamour/b294d892398b462bae475e323215b58c.jpg/44e5446f/o/w960',
  },
  {
    uuid: 'a9',
    firstName: 'Норман',
    lastName: 'Янг',
    isOnline: true,
    avatar: 'https://muz-tv.ru/storage/images/news/normal/5VElh2eUSend1bIiIBoXag2YBX6bcTwttVT7VEOT.jpeg',
  },
  {
    uuid: 'b1',
    firstName: 'Виктор',
    lastName: 'Бишоп',
    isOnline: false,
    avatar: 'https://n1s1.hsmedia.ru/f6/f0/b1/f6f0b1b8210de72c3592c7ec86b04023/440x326_21_67c6ef42a19705fdf27c33be98693568@720x481_0xc0a8392b_8140225401428426931.jpg',
  },
  {
    uuid: 'b2',
    firstName: 'Памела',
    lastName: 'Флетчер',
    isOnline: false,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreatugeQMEaTGzfH-6rjPG29Nc-yyDz0f6hNK1I_HCuDh24b3nw&s',
  },
  {
    uuid: 'b3',
    firstName: 'Мэтью',
    lastName: 'Теренер',
    isOnline: true,
    avatar: 'https://lifehacker.ru/special/asus-zenfone/assets/i/main/cutted/1.jpg',
  },
  {
    uuid: 'b4',
    firstName: 'Офелия',
    lastName: 'Сивенсон',
    isOnline: false,
    avatar: 'https://images.unian.net/photos/2019_10/1571226804-8464.jpg?0.03891234063697757',
  },
  {
    uuid: 'b5',
    firstName: 'Диана',
    lastName: 'Брук',
    isOnline: true,
    avatar: 'https://www.vesty.co.il/PicServer5/2018/03/04/8384434/shutterstock_399031114.jpg',
  },
  {
    uuid: 'b6',
    firstName: 'Сара',
    lastName: 'Блэр',
    isOnline: false,
    avatar: 'https://condenast-media.gcdn.co/glamour/b294d892398b462bae475e323215b58c.jpg/44e5446f/o/w960',
  },
  {
    uuid: 'b7',
    firstName: 'Норман',
    lastName: 'Янг',
    isOnline: true,
    avatar: 'https://muz-tv.ru/storage/images/news/normal/5VElh2eUSend1bIiIBoXag2YBX6bcTwttVT7VEOT.jpeg',
  },
  {
    uuid: 'b8',
    firstName: 'Виктор',
    lastName: 'Бишоп',
    isOnline: false,
    avatar: 'https://n1s1.hsmedia.ru/f6/f0/b1/f6f0b1b8210de72c3592c7ec86b04023/440x326_21_67c6ef42a19705fdf27c33be98693568@720x481_0xc0a8392b_8140225401428426931.jpg',
  },
];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default usersReducer;