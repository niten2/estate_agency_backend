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
const mongoose_1 = require("config/initialize/mongoose");
const main = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield mongoose_1.connectDb();
        yield mongoose_1.dropDb();
        console.log("drop all documents succsess");
    }
    catch (err) {
        console.log(err.stack);
    }
    process.exit();
});
main();
//# sourceMappingURL=drop.js.map