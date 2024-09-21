import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    dc_id: string;

    @Column()
    password: string;

    @Column()
    dateReg: string;

    @Column()
    isAdmin: boolean;

    @Column()
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