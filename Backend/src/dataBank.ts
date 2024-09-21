import { DataSource } from "typeorm";
import { Game } from "./entity/game";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8080,
    username: "root",
    password: "mysql",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Game],
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