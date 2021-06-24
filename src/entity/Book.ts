import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";

@ObjectType()
@Entity("books")
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 256 })
    title: string

    @Field(type => BookAuthor, { nullable: true })
    @ManyToOne(type => Author, author => author.books)
    author: Author
}

@ObjectType()
export class BookAuthor {

    @Field()
    @Column({ length: 128, unique: true })
    name: string;
}