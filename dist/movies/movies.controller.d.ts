import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<CreateMovieDto & import("./entities/movie.entity").Movie>;
    findAll(): Promise<import("./entities/movie.entity").Movie[]>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<import("typeorm").UpdateResult>;
    findOne(id: string): Promise<import("./entities/movie.entity").Movie>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
