"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (string) => {
    return typeof string === 'string';
};
const isWeather = (weather) => {
    return Object.values(types_1.WeatherOptions).includes(weather);
};
const isVisibility = (visibility) => {
    return Object.values(types_1.VisibilityOptions).includes(visibility);
};
// params from req.body
const parseComment = (comment) => {
    if (!isString(comment)) {
        throw new Error(`Comment expect to be string but recived ${typeof comment}`);
    }
    return comment;
};
const parseWeather = (weather) => {
    if (!isString(weather) || !isWeather(weather)) {
        throw new Error(`weather expect string but recived ${typeof weather}`);
    }
    return weather;
};
const parseVisibility = (visibility) => {
    if (!isString(visibility) || !isVisibility(visibility)) {
        throw new Error(`visibility expect string but recived ${typeof visibility}`);
    }
    return visibility;
};
const toNewDiaryEntry = (reqBody) => {
    const newEntry = {
        comment: parseComment(reqBody.comment),
        weather: parseWeather(reqBody.weather),
        visibility: parseVisibility(reqBody.visibility),
        date: new Date().toISOString().slice(0, 10),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
