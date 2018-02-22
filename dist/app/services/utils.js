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
const models_1 = require("app/models");
const jwt_token_1 = require("app/services/jwt_token");
const settings_1 = require("config/settings");
exports.timeout = (ms) => {
    if (settings_1.default.isEnvTest)
        return;
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.getTokenFromHeader = (req) => {
    if (!req.header('Authorization') || !req.header('authorization')) {
        return null;
    }
    const parts = req.header('Authorization').split(' ');
    const token = parts[1];
    return token;
};
exports.authenticated = (fn) => (parent, args, ctx, info) => __awaiter(this, void 0, void 0, function* () {
    let { token } = ctx;
    if (!token) {
        throw new Error("token not found");
    }
    let payload;
    try {
        payload = yield jwt_token_1.verifyJwt(token);
    }
    catch (err) {
        throw new Error("token not valid");
    }
    const user = yield models_1.User.findById(payload.user_id);
    if (!user) {
        throw new Error("user not found");
    }
    ctx.user = user;
    return fn(parent, args, ctx, info);
});
//# sourceMappingURL=utils.js.map