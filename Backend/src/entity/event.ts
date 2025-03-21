import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Min, Max } from "class-validator";
import { User } from "./user";

@Entity()
export class CommunityEvent {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    link!: string;

    @Column()
    dateCr!: string;

    @ManyToOne(() => User, (user) => user.comEvents)
    user!: User;

    constructor(init?: Partial<CommunityEvent>) {
        Object.assign(this, init);
    }
}