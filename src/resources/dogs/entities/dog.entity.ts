import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
