import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nickname: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: true })
    dc_id: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    dateReg: string;

    @Column({ default: false })
    isAdmin: boolean;

    @Column({ default: false })
    isVet: boolean;

    constructor(id: number, nickname: string, email: string, dc_id: string, password: string, dateReg: string, isAdmin: boolean, isVet: boolean) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.dc_id = dc_id;
        this.password = password;
        this.dateReg = dateReg;
        this.isAdmin = isAdmin;
        this.isVet = isVet;
    }
}