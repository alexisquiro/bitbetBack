
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameDto {
    @IsNotEmpty()
    @IsString()
    team1:string

    @IsNotEmpty()
    @IsString()
    team2 :string

    @IsString()
    dateCreation: string

    @IsNotEmpty()
    dateGame:string

    @IsNotEmpty()
    winner:number
}