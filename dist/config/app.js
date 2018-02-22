"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("config/settings");
const routes_1 = require("config/routes");
const middlewares_1 = require("app/middlewares");
const mongoose_1 = require("config/initialize/mongoose");
const logger_1 = require("app/services/logger");
exports.initApp = (app) => __awaiter(this, void 0, void 0, function* () {
    yield middlewares_1.default(app);
    yield routes_1.default(app);
    logger_1.default.info(`App ${settings_1.default.name}, running on port ${settings_1.default.port}, NODE_ENV ${settings_1.default.env}`);
});
exports.listen = (app) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield mongoose_1.connectDb();
        yield exports.initApp(app);
        yield app.listen(settings_1.default.port);
    }
    catch (err) {
        logger_1.default.error(err.message);
    }
});
//# sourceMappingURL=app.js.map