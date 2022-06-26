import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])], 
  providers: [SeasonService]
})
export class SeasonModule {}
