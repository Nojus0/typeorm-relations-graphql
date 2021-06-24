import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";

@ObjectType()
@Entity("books")
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 256 })
    title: string

    @Field(type => Author, { nullable: true })
    @OneToOne(type => Author)
    @JoinColumn()
    author: Author
}

@ObjectType()
export class BookAuthor {

    @Field()
    @Column({ length: 128, unique: true })
    name: string;
}