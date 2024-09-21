import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fighter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    tipo: string;

    constructor(id: number, nome: string, descricao: string, tipo: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
    }
}