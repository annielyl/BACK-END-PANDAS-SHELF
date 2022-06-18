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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsMoviesController = void 0;
const common_1 = require("@nestjs/common");
const reviews_movies_service_1 = require("./reviews-movies.service");
const create_reviews_movie_dto_1 = require("./dto/create-reviews-movie.dto");
const update_reviews_movie_dto_1 = require("./dto/update-reviews-movie.dto");
let ReviewsMoviesController = class ReviewsMoviesController {
    constructor(reviewsMoviesService) {
        this.reviewsMoviesService = reviewsMoviesService;
    }
    create(createReviewsMovieDto) {
        return this.reviewsMoviesService.create(createReviewsMovieDto);
    }
    findAll() {
        return this.reviewsMoviesService.findAll();
    }
    findOne(id) {
        return this.reviewsMoviesService.findOne(id);
    }
    update(id, updateReviewsMovieDto) {
        return this.reviewsMoviesService.update(id, updateReviewsMovieDto);
    }
    remove(id) {
        return this.reviewsMoviesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reviews_movie_dto_1.CreateReviewsMovieDto]),
    __metadata("design:returntype", void 0)
], ReviewsMoviesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewsMoviesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsMoviesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reviews_movie_dto_1.UpdateReviewsMovieDto]),
    __metadata("design:returntype", void 0)
], ReviewsMoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsMoviesController.prototype, "remove", null);
ReviewsMoviesController = __decorate([
    (0, common_1.Controller)('reviews-movies'),
    __metadata("design:paramtypes", [reviews_movies_service_1.ReviewsMoviesService])
], ReviewsMoviesController);
exports.ReviewsMoviesController = ReviewsMoviesController;
//# sourceMappingURL=reviews-movies.controller.js.map