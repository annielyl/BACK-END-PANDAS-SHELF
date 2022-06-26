import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeasonService } from './season.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Controller('Season')
export class SeasonController {
  constructor(private readonly SeasonService: SeasonService) {}

  @Post()
  create(@Body() createSeasonDto: CreateSeasonDto) {
    return this.SeasonService.create(createSeasonDto);
  }

  @Get()
  findAll() {
    return this.SeasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SeasonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeasonMovieDto: UpdateSeasonDto) {
    return this.SeasonService.update(id, updateSeasonMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SeasonService.remove(id);
  }
}