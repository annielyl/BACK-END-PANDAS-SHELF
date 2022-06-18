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
exports.ReviewsMovie = void 0;
const movie_entity_1 = require("../../movies/entities/movie.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let ReviewsMovie = class ReviewsMovie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], ReviewsMovie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], ReviewsMovie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'evaluation' }),
    __metadata("design:type", Number)
], ReviewsMovie.prototype, "evaluation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => movie_entity_1.Movie),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", movie_entity_1.Movie)
], ReviewsMovie.prototype, "movie", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, user => user.reviewsMovie),
    __metadata("design:type", Array)
], ReviewsMovie.prototype, "user", void 0);
ReviewsMovie = __decorate([
    (0, typeorm_1.Entity)()
], ReviewsMovie);
exports.ReviewsMovie = ReviewsMovie;
//# sourceMappingURL=reviews-movie.entity.js.map