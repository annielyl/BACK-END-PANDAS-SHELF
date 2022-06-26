import { Movie } from './movies/entities/movie.entity';
import { GenresModule } from './genres/genre.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genres/entities/genre.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ReviewsMovie } from './reviews-movies/entities/reviews-movie.entity';
import { ReviewsMoviesModule } from './reviews-movies/reviews-movies.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { SeasonModule } from './season/season.module';
import { StudiosModule } from './studios/studios.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'pandas-shelf',
      entities: [User, Genre, Movie, ReviewsMovie],
      synchronize: true,
    }),
    UserModule,
    GenresModule,
    MoviesModule,
    ReviewsMoviesModule,
    AuthModule,
    SeasonModule,
    StudiosModule
  ],
})
export class AppModule {}
