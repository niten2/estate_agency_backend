"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("config/settings");
const intel = require("intel");
const buildLogger = () => {
    if (settings_1.default.isEnvTest) {
        return {
            info: (context) => { },
            error: (context) => { },
        };
    }
    return intel;
};
const logger = buildLogger();
exports.default = logger;
//# sourceMappingURL=logger.js.map