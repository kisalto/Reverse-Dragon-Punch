/*import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Fighter } from "./fighter";
import { Guide } from "./guide";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    alias!: string;

    @Column()
    description!: string;

    @Column()
    link!: string;

    @Column()
    price!: number;

    @OneToMany(() => Fighter, (fighter) => fighter.game)
    fighters!: Fighter[];

    @OneToMany(() => Guide, (guide) => guide.game)
    guides!: Guide[];

    constructor(init?: Partial<Game>) {
        Object.assign(this, init)
    }
}*/