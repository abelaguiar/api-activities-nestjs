import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma-service';
import { activities } from '@prisma/client';
import ActivitiesRequest from 'src/application/requests/activities.request';

@Injectable()
export class ActivityRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<activities[]> {
    return this.prisma.activities.findMany();
  }

  async save(request: ActivitiesRequest): Promise<activities> {
    const date = new Date();
    const create_time = date.toJSON();
    const name = request.name;
    const email = request.email;
    const description = request.description;
    return this.prisma.activities.create({
      data: {
        name,
        email,
        description,
        create_time,
      },
    });
  }

  async update(id: number, request: ActivitiesRequest): Promise<activities> {
    const date = new Date();
    const create_time = date.toJSON();
    const name = request.name;
    const email = request.email;
    const description = request.description;
    return this.prisma.activities.update({
      where: { id: id },
      data: {
        name,
        email,
        description,
        create_time,
      },
    });
  }

  async delete(id: number): Promise<activities> {
    return this.prisma.activities.delete({
      where: { id: id },
    });
  }
}
