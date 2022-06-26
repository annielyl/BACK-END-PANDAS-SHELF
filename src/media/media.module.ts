import { Module } from '@nestjs/common';
import { MediasService } from './media.service';
import { MediaController } from './media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { Season } from 'src/season/entities/season.entity';
import { Studio } from 'src/studios/entities/studio.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media, Season, Studio, User])],
  controllers: [MediaController],
  providers: [MediasService],
})
export class MediaModule {}
