import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guide {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @Column()
    dateCr: string;

    @Column()
    likes: number;
    
    @Column()
    dislikes: number;

    constructor(id: number, title: string, type: string, description: string, link: string, likes: number, dateCr: string, dislikes: number) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.link = link;
        this.dateCr = dateCr;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}