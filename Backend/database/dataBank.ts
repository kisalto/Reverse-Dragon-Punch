import { DataSource } from "typeorm";
import { Game } from "../src/entity/game";
import { Guide } from "../src/entity/guide";
import { User } from "../src/entity/user";
import { Fighter } from "../src/entity/fighter";
import { Event } from "../src/entity/event";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "rdpdatabase",
    synchronize: true,
    logging: false,
    entities: [Game, User, Guide, Event, Fighter],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });