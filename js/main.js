
let photos = [];
console.log(photos.length);
//вариант как можно доавлять id
let createUserId = function () {
    id =  photos.length + 1;
    console.log(photos);
    return id
};
createUserId();

let photoObj = {
  id: createUserId(),
  url: 'photos/{{случайное число от 1 до 25}}.jpg',
  description: 'someDescription',
  likes: 15,
  comments: [
    {
      id: 0,
      name: 'someName',
      avatar: 'img/avatar-{{случайное число от 1 до 6}}.svg ',
      message: 'Всё отлично!',
    },
  ]
};
console.log(photoObj);

const createPhotoId = function () {
  return {
    id: createUserId() ,
    url: '',
    description: '',
    likes: 0,
    comments: [
      {
        id: 0,
        name: '',
        avatar: '',
        message: '',
      },
    ]
  };
};
console.log('создание обьекта user',createPhotoId());

let usersArray = Array.from({length:25}, createUserId);
console.log('массив обьектов usersArray', usersArray);

/*
let someObj = {
  id: 1,
  url: 'photos/{{случайное число от 1 до 25}}.jpg',
  description: 'someDescription',
  likes: 15,
  comments: [
    {
      id: 1,
      name: 'someName',
      avatar: 'img/avatar-{{случайное число от 1 до 6}}.svg ',
      message: 'Всё отлично!',
    },
  ]
};


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
console.log('рандомное число', getRandomInteger(1, 25));


//проверка обьекта
console.log('обьект someObj', someObj);
//проверка ключа обьекта
console.log('значение ключа id', someObj['id']);
//проверка массива внутри обьекта
console.log('массива внутри someObj', someObj.comments);
//проверка значения второго эдемента массива внутри обьекта
console.log('значение первого элемента массива comments внутри someObj', someObj.comments[0].id);


//функция для создания обьекта
*/
