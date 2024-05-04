import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma-service';
import { activities } from '@prisma/client';

@Injectable()
export class ActivityRepository {
  constructor(private prisma: PrismaService) {}
  async findMany(): Promise<activities[]> {
    return this.prisma.activities.findMany();
  }
  async save(
    name: string,
    email: string,
    description: string,
  ): Promise<activities> {
    const date = new Date();
    const create_time = date.toJSON();
    return this.prisma.activities.create({
      data: {
        name,
        email,
        description,
        create_time,
      },
    });
  }
  async update(
    id: number,
    name: string,
    email: string,
    description: string,
  ): Promise<activities> {
    const date = new Date();
    const create_time = date.toJSON();
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
}
