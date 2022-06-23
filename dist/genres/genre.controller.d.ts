import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { GenreService } from './genre.service';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): Promise<CreateGenreDto & import("./entities/genre.entity").Genre>;
    findAll(): Promise<import("./entities/genre.entity").Genre[]>;
    update(id: string, updateGenreDto: UpdateGenreDto): Promise<import("typeorm").UpdateResult>;
    findOne(id: string): Promise<import("./entities/genre.entity").Genre>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
