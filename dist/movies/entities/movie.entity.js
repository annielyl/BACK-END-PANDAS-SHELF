"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const reviews_movie_entity_1 = require("../../reviews-movies/entities/reviews-movie.entity");
const typeorm_1 = require("typeorm");
let Movie = class Movie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title' }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'evaluation' }),
    __metadata("design:type", Number)
], Movie.prototype, "evaluation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'year' }),
    __metadata("design:type", Number)
], Movie.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'directors' }),
    __metadata("design:type", String)
], Movie.prototype, "directors", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'genre' }),
    __metadata("design:type", String)
], Movie.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reviews_movie_entity_1.ReviewsMovie, (ReviewsMovie) => ReviewsMovie.movie, { cascade: true }),
    __metadata("design:type", Array)
], Movie.prototype, "ReviewsMovie", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map