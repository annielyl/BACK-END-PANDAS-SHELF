"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const media_entity_1 = require("./media/entities/media.entity");
const genre_module_1 = require("./genres/genre.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const genre_entity_1 = require("./genres/entities/genre.entity");
const user_entity_1 = require("./user/entities/user.entity");
const user_module_1 = require("./user/user.module");
const media_module_1 = require("./media/media.module");
const auth_module_1 = require("./auth/auth.module");
const reviews_entity_1 = require("./reviews/entities/reviews.entity");
const reviews_module_1 = require("./reviews/reviews.module");
const season_entity_1 = require("./season/entities/season.entity");
const season_module_1 = require("./season/season.module");
const studio_entity_1 = require("./studios/entities/studio.entity");
const studios_module_1 = require("./studios/studios.module");
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
                entities: [user_entity_1.User, genre_entity_1.Genre, media_entity_1.Media, reviews_entity_1.Review, season_entity_1.Season, studio_entity_1.Studio],
                synchronize: true,
            }),
            user_module_1.UserModule,
            genre_module_1.GenresModule,
            media_module_1.MediaModule,
            reviews_module_1.ReviewsModule,
            auth_module_1.AuthModule,
            season_module_1.SeasonModule,
            studios_module_1.StudiosModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map