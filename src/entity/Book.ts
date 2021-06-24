import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";

@ObjectType()
@Entity("books")
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 256 })
    title: string

    @Field(type => [BookAuthor], { nullable: true })
    @ManyToMany(type => Author)
    @JoinTable({ name: "book_authors" })
    authors: Author[]
}

@ObjectType()
export class BookAuthor {

    @Field()
    @Column({ length: 128, unique: true })
    name: string;
}