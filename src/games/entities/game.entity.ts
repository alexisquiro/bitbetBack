import { Prisma } from "@prisma/client";

export class Game implements Prisma.GameCreateInput{
    team1: string;
    team2: string;
    dateCreation: string;
    dateGame:string;
    winner:number;
}
