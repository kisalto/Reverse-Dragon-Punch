import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
//import { Game } from "./game";
import { Guide } from "./guide";

@Entity()
export class Fighter {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    type!: string;

    @Column()
    strenghts!: string;

    @Column()
    weaknesses!: string;

    @Column()
    description!: string;

    /*@ManyToOne(() => Game, (game) => game.fighters, { onDelete: "CASCADE" })
    game!: Game;*/

    @OneToMany(() => Guide, (guide) => guide.fighter)
    guides!: Guide[];

    constructor(init?: Partial<Fighter>) {
        Object.assign(this, init);
    }
}