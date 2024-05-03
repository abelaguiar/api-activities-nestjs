import { Module } from '@nestjs/common';
import { ActivitiesController } from './controllers/activities.controller';
import { ActivitiesService } from 'src/domain/services/activities.service';
import { PrismaService } from 'src/infra/services/prisma-service';
import { ActivityRepository } from 'src/infra/repositories/activity.repository';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService, PrismaService, ActivityRepository],
})
export class ApplicationModule {}
