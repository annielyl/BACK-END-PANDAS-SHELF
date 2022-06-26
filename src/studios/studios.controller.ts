import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateStudioDto } from './dto/create-studio.dto';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { StudiosService } from './studios.service';

@Controller('Studios')
export class StudiosController {
  constructor(private readonly StudioService: StudiosService) {}

  @Post()
  create(@Body() createStudioDto: CreateStudioDto) {
    return this.StudioService.create(createStudioDto);
  }

  @Get()
  findAll() {
    return this.StudioService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudioDto: UpdateStudioDto) {
    return this.StudioService.update(id, updateStudioDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.StudioService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudioService.remove(id);
  }
}
