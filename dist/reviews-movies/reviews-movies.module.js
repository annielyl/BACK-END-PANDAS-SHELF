"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsMoviesModule = void 0;
const common_1 = require("@nestjs/common");
const reviews_movies_service_1 = require("./reviews-movies.service");
const reviews_movies_controller_1 = require("./reviews-movies.controller");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("../movies/entities/movie.entity");
const reviews_movie_entity_1 = require("./entities/reviews-movie.entity");
let ReviewsMoviesModule = class ReviewsMoviesModule {
};
ReviewsMoviesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reviews_movie_entity_1.ReviewsMovie, movie_entity_1.Movie])],
        controllers: [reviews_movies_controller_1.ReviewsMoviesController],
        providers: [reviews_movies_service_1.ReviewsMoviesService]
    })
], ReviewsMoviesModule);
exports.ReviewsMoviesModule = ReviewsMoviesModule;
//# sourceMappingURL=reviews-movies.module.js.map