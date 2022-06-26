import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/media/entities/media.entity';
import { Season } from './entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media, Season])], 
  controllers: [SeasonController],
  providers: [SeasonService]
})
export class SeasonModule {}
