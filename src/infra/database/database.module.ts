import { Module } from '@nestjs/common';
import { INotificationsRepository } from 'src/application/repositories/INotificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';

@Module({
    providers: [
        PrismaService,
        {
            provide: INotificationsRepository,
            useClass: PrismaNotificationsRepository,
        },
    ],
    exports: [INotificationsRepository],
})
export class DatabaseModule {}
