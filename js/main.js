const NAMES = [
  'Кекс',
  'Пекс',
  'Барсик',
  'Жорик',
  'Валентин',
  'Мурзик',
  'Пушистик',
  'Жёлтик',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const ALL_PHOTO_DESCRIBTIONS = 25;

function getRandomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const createPhotoDescription = () => {
  const randomNumber =  getRandomNumber(1, 25);
  const randomAvatarIndex = Math.floor(Math.random() * 6) + 1;
  const likes = Math.floor(Math.random() * 200) + 15;
  const id = randomNumber;
  const url = 'photos/${randomNumber}.jpg'; 
  const  description = 'Это фотография';
  const comments = {
    id: randomNumber,
    avatar: 'img/avatar/${randomAvatarIndex}.svg',
    message: getRandomNumber(1, MESSAGES.length),
    name: getRandomNumber(1, NAMES.length),
  };
  return {
    id,
    url,
    description,
    likes,
    comments,
  };
};

const allPhotos = new Array(ALL_PHOTO_DESCRIBTIONS).fill(null).map(()=> createPhotoDescription());
console.log(allPhotos());