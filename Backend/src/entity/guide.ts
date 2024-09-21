import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guide {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

    @Column()
    descricao: string;

    @Column()
    link: string;

    @Column()
    date: string;

    @Column()
    likes: number;
    
    @Column()
    dislikes: number;

    constructor(id: number, tipo: string, descricao: string, link: string, likes: number, date: string, dislikes: number) {
        this.id = id;
        this.tipo = tipo;
        this.descricao = descricao;
        this.link = link;
        this.date = date;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}