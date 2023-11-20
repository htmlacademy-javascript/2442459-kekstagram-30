const PICTURE_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 30;
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Запомни! Одна ошибка — и ты ошибся!',
  'Человек меняется по двум причинам: или по первой, или по второй',
  'Шаг влево, шаг вправо — два шага',
  'Работа — это не волк. Работа — ворк. А волк — это ходить.',
  'Никогда не сдавайтесь, идите к своей цели! А если будет сложно – сдавайтесь.',
  'Если заблудился в лесу, иди домой.',
];
const NAMES = ['Мери', 'Ольга', 'Паша', 'Катя', 'Алина', 'Никита', 'Стас', 'Гена'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const generateMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENTS_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: generateMessage(),
  name: getRandomArrayElement(NAMES),
});

const generatePictureId = createIdGenerator();

const createPicture = () => ({
  id: generatePictureId(1, PICTURE_COUNT),
  url: `photos/${getRandomInteger(1, PICTURE_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENTS_COUNT)},
    createComment,
  ),
});

const getPictures = () => Array.from[
  {length: PICTURE_COUNT},
  (_, pictureIndex) => createPicture(pictureIndex + 1)
];

getPictures();
