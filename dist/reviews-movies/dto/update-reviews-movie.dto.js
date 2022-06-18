"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewsMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reviews_movie_dto_1 = require("./create-reviews-movie.dto");
class UpdateReviewsMovieDto extends (0, mapped_types_1.PartialType)(create_reviews_movie_dto_1.CreateReviewsMovieDto) {
}
exports.UpdateReviewsMovieDto = UpdateReviewsMovieDto;
//# sourceMappingURL=update-reviews-movie.dto.js.map