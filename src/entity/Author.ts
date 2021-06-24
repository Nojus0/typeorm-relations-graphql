import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@ObjectType()
@Entity("authors")
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 128, unique: true })
    name: string;
    
}