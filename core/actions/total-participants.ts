import { obtainParticipants } from "./";
export function totalParticipants():number {
    return obtainParticipants().length;
}