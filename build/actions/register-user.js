"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const fs_1 = __importDefault(require("fs"));
const _1 = require("./");
function registerUser(user) {
    const newParticipant = Object.assign(Object.assign({}, user), { date: new Date() });
    const participante = (0, _1.obtainParticipants)();
    participante.push(newParticipant);
    const data = JSON.stringify(participante);
    fs_1.default.writeFileSync("participants.json", data);
}
exports.registerUser = registerUser;
