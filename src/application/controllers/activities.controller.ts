import { Controller, Get } from '@nestjs/common';
import { activities } from '@prisma/client';
import { ActivitiesService } from 'src/domain/services/activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}
  @Get('/')
  getActivities(): Promise<activities[]> {
    return this.service.getActivities();
  }
}
