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
const factory_1 = require("db/factory");
const mongoose_1 = require("config/initialize/mongoose");
const create = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield mongoose_1.connectDb();
        yield factory_1.default.create('user', { login: "admin", password: "12345" });
        // await factory.create("room")
        // await factory.create("room")
        // await factory.create("room")
        yield mongoose_1.closeDb();
        console.log("models created");
    }
    catch (err) {
        console.log(err.stack);
    }
    process.exit();
});
create();
//# sourceMappingURL=seed.js.map