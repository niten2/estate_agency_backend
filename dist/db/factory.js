"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
const factory_girl_1 = require("factory-girl");
const mongoose_1 = require("config/initialize/mongoose");
factory_girl_1.factory.define('user', mongoose_1.User, {
    login: faker.name.findName,
    password: faker.internet.password,
});
factory_girl_1.factory.define('room', mongoose_1.Room, {
    name: faker.name.findName,
});
exports.default = factory_girl_1.factory;
//# sourceMappingURL=factory.js.map