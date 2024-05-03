import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma-service';
import { activities } from '@prisma/client';

@Injectable()
export class ActivityRepository {
  constructor(private prisma: PrismaService) {}
  async findMany(): Promise<activities[]> {
    return this.prisma.activities.findMany();
  }
}
