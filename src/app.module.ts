import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';
import { ActivitiesController } from './application/controllers/activities.controller';
import { ActivitiesService } from './domain/services/activities.service';
import { PrismaService } from './infra/services/prisma-service';
import { ActivityRepository } from './infra/repositories/activity.repository';

@Module({
  imports: [ApplicationModule, DomainModule, InfraModule],
  controllers: [ActivitiesController],
  providers: [
    ActivitiesService,
    ActivityRepository,
    PrismaService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
