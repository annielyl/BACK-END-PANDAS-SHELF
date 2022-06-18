import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
export declare class GenreService {
    private genresRepository;
    constructor(genresRepository: Repository<Genre>);
    create(createGenreDto: CreateGenreDto): Promise<CreateGenreDto & Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    update(id: string, updategenresDto: UpdateGenreDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
