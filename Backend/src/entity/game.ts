import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @Column()
    price: number;

    constructor(id: number, name: string, description: string, link: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.link = link;
        this.price = price;
    }
}