"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const bodyParser = require("body-parser");
const morganBody = require("morgan-body");
const settings_1 = require("config/settings");
const logger_1 = require("app/services/logger");
exports.default = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    if (!settings_1.default.isEnvTest) {
        app.use((req, res, next) => {
            req.log = logger_1.default;
            next();
        });
        morganBody(app);
    }
};
//# sourceMappingURL=index.js.map