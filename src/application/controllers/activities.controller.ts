import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
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

  @Post('/')
  async postActivity(@Body() request: ActivitiesRequest) {
    return this.service.postActivity(
      request.name,
      request.email,
      request.description,
    );
  }

  @Patch('/:id')
  async patchActivity(
    @Param('id') id: string,
    @Body() request: ActivitiesRequest,
  ) {
    const activityId = parseInt(id, 10);
    return this.service.patchActivity(
      activityId,
      request.name,
      request.email,
      request.description,
    );
  }

  @Delete('/:id')
  async deleteActivity(@Param('id') id: string) {
    const activityId = parseInt(id, 10);
    return this.service.deleteActivity(activityId);
  }
}
