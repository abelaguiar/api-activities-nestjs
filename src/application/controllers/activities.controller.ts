import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
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
    return this.service.postActivity(request);
  }

  @Patch('/:id')
  async patchActivity(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: ActivitiesRequest,
  ) {
    return this.service.patchActivity(id, request);
  }

  @Delete('/:id')
  async deleteActivity(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteActivity(id);
  }
}
