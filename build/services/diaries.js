"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.getEntryById = exports.getEntries = void 0;
const diariesData_json_1 = __importDefault(require("./diariesData.json"));
// Se hace necesario la acerción de tipos (as ****)
const diaries = diariesData_json_1.default;
const getEntries = () => {
    return diaries;
};
exports.getEntries = getEntries;
const getEntryById = (id) => {
    return diaries.find((diary) => {
        return diary.id == id;
    });
};
exports.getEntryById = getEntryById;
// Retusns without sensitive info
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility,
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = (entry) => {
    const newDiary = Object.assign({ id: Math.max(...diariesData_json_1.default.map((num) => num.id)) + 1 }, entry);
    // This part -> try catch block
    diariesData_json_1.default.push(newDiary);
    //
    return newDiary;
};
exports.addEntry = addEntry;
