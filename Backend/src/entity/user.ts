import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Guide } from "./guide";
import { CommunityEvent } from "./event";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    nickname!: string;

    @Column({ nullable: false })
    email!: string;

    @Column({ nullable: true })
    dc_id!: string;

    @Column({ nullable: false })
    password!: string;

    @Column({ nullable: false })
    dateReg!: string;

    @Column({ default: false })
    isAdmin!: boolean;

    @Column({ default: false })
    isVet!: boolean;

    @OneToMany(() => Guide, (guide) => guide.user)
    guides!: Guide[];

    @OneToMany(() => CommunityEvent, (comEvent) => comEvent.user)
    comEvents!: CommunityEvent[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init)
    }
}