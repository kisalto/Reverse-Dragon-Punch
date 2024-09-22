import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fighter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

    constructor(id: number, name: string, description: string, type: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }
}