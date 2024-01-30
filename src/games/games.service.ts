import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {

   return this.prisma.game.create(
      {
        data: {
          team1: createGameDto.team1,
          team2: createGameDto.team2,
          dateCreation: createGameDto.dateCreation,
          dateGame:createGameDto.dateGame,
          winner:0
        },
    
      }
    )
  }

  findAll() {
    return this.prisma.game.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
