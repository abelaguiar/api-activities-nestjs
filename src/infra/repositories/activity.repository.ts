import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma-service';
import { Activity } from '@prisma/client';
import ActivitiesRequest from 'src/application/requests/activities.request';

@Injectable()
export class ActivityRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Activity[]> {
    return this.prisma.activity.findMany();
  }

  async save(request: ActivitiesRequest): Promise<Activity> {
    const date = new Date();
    const create_time = date.toJSON();
    const name = request.name;
    const email = request.email;
    const description = request.description;
    return this.prisma.activity.create({
      data: {
        name,
        email,
        description,
        create_time,
      },
    });
  }

  async update(id: number, request: ActivitiesRequest): Promise<Activity> {
    const date = new Date();
    const create_time = date.toJSON();
    const name = request.name;
    const email = request.email;
    const description = request.description;
    return this.prisma.activity.update({
      where: { id: id },
      data: {
        name,
        email,
        description,
        create_time,
      },
    });
  }

  async delete(id: number): Promise<Activity> {
    return this.prisma.activity.delete({
      where: { id: id },
    });
  }
}
