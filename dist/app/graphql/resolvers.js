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
const utils_1 = require("app/services/utils");
const Query = {
    rooms: utils_1.authenticated((root, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const rooms = yield models_1.Room.find();
        return rooms;
    })),
    room: utils_1.authenticated((root, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const room = yield models_1.Room.findById(args.id);
        return room;
    })),
};
const Mutation = {
    createRoom: utils_1.authenticated((root, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const room = yield models_1.Room.create(args.input);
        return room;
    })),
    updateRoom: utils_1.authenticated((root, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const room = yield models_1.Room.findById(args.input.id);
        yield room.set(args.input);
        yield room.save();
        return room;
    })),
    deleteRoom: utils_1.authenticated((_, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const room = yield models_1.Room.findByIdAndRemove(args.input.id);
        return room;
    })),
    createToken: (_, args) => __awaiter(this, void 0, void 0, function* () {
        const { login, password } = args.input;
        const user = yield models_1.User.findOne({ login });
        if (!user) {
            throw new Error("user not found");
        }
        if (!(yield user.comparePassword(password))) {
            throw new Error("wrong password");
        }
        const token = yield jwt_token_1.createJwt(user);
        return {
            user,
            token,
        };
    }),
    searchRoom: utils_1.authenticated((_, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const rooms = models_1.Room.find({ name: { $regex: args.input.name } });
        return rooms;
    })),
};
exports.default = { Query, Mutation };
//# sourceMappingURL=resolvers.js.map