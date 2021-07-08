import './data';
import './createPhotoDescription';
import  './getRandomNumber';
import {allPhotos} from './createPhotoDescription';
import {getRandomNumber} from './getRandomNumber';

const photos = allPhotos();
const randomNumber = getRandomNumber(1, 25);
