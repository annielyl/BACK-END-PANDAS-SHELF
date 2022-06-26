import { Media} from './media/entities/media.entity';
import { GenresModule } from './genres/genre.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genres/entities/genre.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';
import { AuthModule } from './auth/auth.module';
import { Review } from './reviews/entities/reviews.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Season } from './season/entities/season.entity';
import { SeasonModule } from './season/season.module';
import { Studio } from './studios/entities/studio.entity';
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
      entities: [User, Genre, Media, Review, Season, Studio],
      synchronize: true,
    }),
    UserModule,
    GenresModule,
    MediaModule,
    ReviewsModule,
    AuthModule,
    SeasonModule,
    StudiosModule,
  ],
})
export class AppModule {}
