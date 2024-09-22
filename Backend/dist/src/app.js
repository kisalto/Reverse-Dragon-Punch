"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const eventRoutes_1 = __importDefault(require("../routes/eventRoutes"));
const guideRoutes_1 = __importDefault(require("../routes/guideRoutes"));
const fighterRoutes_1 = __importDefault(require("../routes/fighterRoutes"));
const gameRoutes_1 = __importDefault(require("../routes/gameRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//routes
app.use(routes_1.default);
app.use(userRoutes_1.default);
app.use(guideRoutes_1.default);
app.use(eventRoutes_1.default);
app.use(fighterRoutes_1.default);
app.use(gameRoutes_1.default);
//server start
app.listen(3333, () => {
    console.log(`Server started at <http://localhost:${3333}>`);
});
