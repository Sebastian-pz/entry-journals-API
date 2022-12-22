import {
  DiaryEntryNoID,
  Visibility,
  VisibilityOptions,
  Weather,
  WeatherOptions,
} from './types';

const isString = (string: any): boolean => {
  return typeof string === 'string';
};

const isWeather = (weather: any): boolean => {
  return Object.values(WeatherOptions).includes(weather);
};

const isVisibility = (visibility: any): boolean => {
  return Object.values(VisibilityOptions).includes(visibility);
};

// params from req.body
const parseComment = (comment: any) => {
  if (!isString(comment)) {
    throw new Error(
      `Comment expect to be string but recived ${typeof comment}`
    );
  }
  return comment;
};

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error(`weather expect string but recived ${typeof weather}`);
  }
  return weather;
};

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error(
      `visibility expect string but recived ${typeof visibility}`
    );
  }
  return visibility;
};

const toNewDiaryEntry = (reqBody: any): DiaryEntryNoID => {
  const newEntry: DiaryEntryNoID = {
    comment: parseComment(reqBody.comment),
    weather: parseWeather(reqBody.weather),
    visibility: parseVisibility(reqBody.visibility),
    date: new Date().toISOString().slice(0, 10),
  };

  return newEntry;
};

export default toNewDiaryEntry;
