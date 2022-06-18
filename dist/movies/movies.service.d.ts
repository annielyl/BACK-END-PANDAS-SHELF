import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private moviesRepository;
    constructor(moviesRepository: Repository<Movie>);
    create(createMovieDto: CreateMovieDto): Promise<CreateMovieDto & Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
