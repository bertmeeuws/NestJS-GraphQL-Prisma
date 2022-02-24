import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ClientCreateInput } from '../@generated/prisma-nestjs-graphql/client/client-create.input';
import { ClientUpdateInput } from '../@generated/prisma-nestjs-graphql/client/client-update.input';
import { UsersService } from 'src/users/users.service';
import { CreateClientInput } from 'src/graphql';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  create(createClientInput: CreateClientInput) {
    return this.prisma.client.create({
      data: createClientInput,
    });
  }

  findAll(id: number) {
    return this.prisma.client.findMany({
      where: {
        coachId: id,
      },
    });
  }

  findOneAsCoach(clientId: number, coachId) {
    return this.prisma.client.findFirst({
      where: {
        id: clientId,
        coachId: coachId,
      },
    });
  }

  findOne(clientId: number) {
    return this.prisma.client.findFirst({
      where: {
        id: clientId,
      },
    });
  }

  getUser(userId) {
    return this.userService.findOne(userId);
  }

  update(id: number, updateClientInput: ClientUpdateInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
