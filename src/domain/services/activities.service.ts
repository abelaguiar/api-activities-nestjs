import { Injectable } from '@nestjs/common';
import { activities } from '@prisma/client';
import { ActivityRepository } from 'src/infra/repositories/activity.repository';

@Injectable()
export class ActivitiesService {
  constructor(private repository: ActivityRepository) {}
  async getActivities(): Promise<activities[]> {
    return this.repository.findMany();
  }
  async postActivity(
    name: string,
    email: string,
    description: string,
  ): Promise<activities> {
    return this.repository.save(name, email, description);
  }
  async patchActivity(
    id: number,
    name: string,
    email: string,
    description: string,
  ): Promise<activities> {
    return this.repository.update(id, name, email, description);
  }
}
