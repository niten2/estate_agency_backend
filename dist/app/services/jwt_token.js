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
const jsonwebtoken_1 = require("jsonwebtoken");
exports.createJwt = (user) => {
    if (!settings_1.default.jwt_secret_key) {
        throw new Error('Jwt Secret Key should be present');
    }
    const payload = {
        user_id: user.id,
    };
    return jsonwebtoken_1.sign(payload, settings_1.default.jwt_secret_key, { expiresIn: 10000000000 });
};
exports.verifyJwt = (token) => __awaiter(this, void 0, void 0, function* () {
    const payload = yield new Promise((resolve, reject) => {
        jsonwebtoken_1.verify(token, settings_1.default.jwt_secret_key, {}, (err, data) => {
            if (err !== null) {
                return reject(err);
            }
            return resolve(data);
        });
    });
    return payload;
});
//# sourceMappingURL=jwt_token.js.map