import {NAMES} from './data' ;
import {MESSAGES} from './data' ;
import {ALL_PHOTO_DESCRIBTIONS} from './data';
import {getRandomNumber} from './getRandomNumber';

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

export {allPhotos};
