"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalParticipants = void 0;
const _1 = require("./");
function totalParticipants() {
    return (0, _1.obtainParticipants)().length;
}
exports.totalParticipants = totalParticipants;
