import { Controller, Body, Get, Post } from '@nestjs/common';
import { activities } from '@prisma/client';
import { ActivitiesService } from 'src/domain/services/activities.service';
import ActivitiesRequest from '../requests/activities.request';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}
  @Get('/')
  getActivities(): Promise<activities[]> {
    return this.service.getActivities();
  }
  @Post('/create')
  async postActivity(@Body() request: ActivitiesRequest) {
    const activity = this.service.postActivity(
      request.name,
      request.email,
      request.description,
    );
    return activity;
  }
}
