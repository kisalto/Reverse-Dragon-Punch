import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fighter } from "./fighter";
//import { Game } from "./game";
import { User } from "./user";

@Entity()
export class Guide {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    type!: string;

    @Column()
    description!: string;

    @Column()
    link!: string;

    @Column()
    dateCr!: string;

    @Column()
    rating!: number;

    @ManyToOne(() => Fighter, (fighter) => fighter.guides)
    fighter!: Fighter;

    /*@ManyToOne(() => Game, (game) => game.guides)
    game!: Game;*/

    @ManyToOne(() => User, (user) => user.guides)
    user!: User;

    constructor(init?: Partial<Guide>) {
        Object.assign(this, init);
    }
}