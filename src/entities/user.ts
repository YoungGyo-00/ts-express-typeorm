import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: true,
    })
    firstName: string;

    @Column()
    lastName!: string;
}
