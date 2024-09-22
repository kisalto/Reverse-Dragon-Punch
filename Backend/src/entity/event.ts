import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @Column()
    dateCr: string;

    constructor(id: number, title: string, description: string, link: string, dateCr: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.dateCr = dateCr;
    }
}