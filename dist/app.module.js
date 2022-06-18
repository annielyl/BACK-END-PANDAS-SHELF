"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const movie_entity_1 = require("./movies/entities/movie.entity");
const genre_module_1 = require("./genres/genre.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const genre_entity_1 = require("./genres/entities/genre.entity");
const user_entity_1 = require("./user/entities/user.entity");
const user_module_1 = require("./user/user.module");
const reviews_movie_entity_1 = require("./reviews-movies/entities/reviews-movie.entity");
const reviews_movies_module_1 = require("./reviews-movies/reviews-movies.module");
const movies_module_1 = require("./movies/movies.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'pandas-shelf',
                entities: [user_entity_1.User, genre_entity_1.Genre, movie_entity_1.Movie, reviews_movie_entity_1.ReviewsMovie],
                synchronize: true,
            }),
            user_module_1.UserModule,
            genre_module_1.GenresModule,
            movies_module_1.MoviesModule,
            reviews_movies_module_1.ReviewsMoviesModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map