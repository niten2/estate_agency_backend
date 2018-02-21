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
require("app/models");
const mongoose = require("mongoose");
const settings_1 = require("../settings");
mongoose.Promise = Promise;
if (!settings_1.default.isEnvTest) {
    mongoose.set("debug", true);
}
exports.User = mongoose.model("User");
exports.Room = mongoose.model("Room");
exports.connectDb = () => __awaiter(this, void 0, void 0, function* () {
    return yield mongoose.connect(settings_1.default.dbUrl);
});
exports.dropDb = () => __awaiter(this, void 0, void 0, function* () {
    try {
        return yield mongoose.connection.db.dropDatabase();
    }
    catch (err) {
        console.log(err);
    }
});
exports.closeDb = () => __awaiter(this, void 0, void 0, function* () {
    return yield mongoose.connection.close;
});
exports.default = mongoose;
//# sourceMappingURL=mongoose.js.map