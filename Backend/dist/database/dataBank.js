"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const game_1 = require("../src/entity/game");
const guide_1 = require("../src/entity/guide");
const user_1 = require("../src/entity/user");
const fighter_1 = require("../src/entity/fighter");
const event_1 = require("../src/entity/event");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "rdpdatabase",
    synchronize: true,
    logging: false,
    entities: [game_1.Game, user_1.User, guide_1.Guide, event_1.Event, fighter_1.Fighter],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
