"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = require("app/graphql/config");
const settings_1 = require("config/settings");
exports.default = (app) => {
    app.get("/", (req, res, next) => {
        res.json({
            name: settings_1.default.name,
            current_version: "/v1",
        });
    });
    app.use("/v1", apollo_server_express_1.graphqlExpress(config_1.default));
    app.use("/v1", apollo_server_express_1.graphiqlExpress({ endpointURL: "/graphql" }));
};
//# sourceMappingURL=routes.js.map