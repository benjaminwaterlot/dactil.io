"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const quote_controller_1 = require("./quote.controller");
const quote_entity_1 = require("./quote.entity");
const quotes_service_1 = require("./quotes.service");
let QuotesModule = class QuotesModule {
};
QuotesModule = __decorate([
    common_1.Module({
        controllers: [quote_controller_1.QuotesController],
        imports: [typeorm_1.TypeOrmModule.forFeature([quote_entity_1.Quote])],
        providers: [quotes_service_1.QuotesService],
    })
], QuotesModule);
exports.QuotesModule = QuotesModule;
//# sourceMappingURL=quote.module.js.map