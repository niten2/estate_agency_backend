"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const utils_1 = require("app/services/utils");
exports.default = (req, res) => {
    return {
        schema: schema_1.default,
        formatError: (err) => ({
            message: err.message,
            status: err.status
        }),
        context: {
            token: utils_1.getTokenFromHeader(req),
            payload: req.payload,
            user: req.user,
            ability: req.ability,
        },
    };
};
//# sourceMappingURL=config.js.map