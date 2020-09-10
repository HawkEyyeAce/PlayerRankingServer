import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ranking {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 100
    })
    userID: string;
    
    @Column()
    score: number;
}