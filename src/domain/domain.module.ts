import { Module } from '@nestjs/common';
import { ActivitiesService } from './services/activities.service';
import { ActivityRepository } from 'src/infra/repositories/activity.repository';
import { PrismaService } from 'src/infra/services/prisma-service';

@Module({
  providers: [ActivitiesService, ActivityRepository, PrismaService],
})
export class DomainModule {}
