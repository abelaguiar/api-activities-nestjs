import { Injectable } from '@nestjs/common';
import { activities } from '@prisma/client';
import ActivitiesRequest from 'src/application/requests/activities.request';
import { ActivityRepository } from 'src/infra/repositories/activity.repository';

@Injectable()
export class ActivitiesService {
  constructor(private repository: ActivityRepository) {}

  async getActivities(): Promise<activities[]> {
    return this.repository.findMany();
  }

  async postActivity(request: ActivitiesRequest): Promise<activities> {
    return this.repository.save(request);
  }

  async patchActivity(
    id: number,
    request: ActivitiesRequest,
  ): Promise<activities> {
    return this.repository.update(id, request);
  }

  async deleteActivity(id: number): Promise<activities> {
    return this.repository.delete(id);
  }
}
