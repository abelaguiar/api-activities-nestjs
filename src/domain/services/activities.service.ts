import { Injectable } from '@nestjs/common';
import { Activity } from '@prisma/client';
import ActivitiesRequest from 'src/application/requests/activities.request';
import { ActivityRepository } from 'src/infra/repositories/activity.repository';

@Injectable()
export class ActivitiesService {
  constructor(private repository: ActivityRepository) {}

  async getActivities(): Promise<Activity[]> {
    return this.repository.findMany();
  }

  async postActivity(request: ActivitiesRequest): Promise<Activity> {
    return this.repository.save(request);
  }

  async patchActivity(
    id: number,
    request: ActivitiesRequest,
  ): Promise<Activity> {
    return this.repository.update(id, request);
  }

  async deleteActivity(id: number): Promise<Activity> {
    return this.repository.delete(id);
  }
}
