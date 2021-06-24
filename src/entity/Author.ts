import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";



//  One author has many books
//  How to link book author?
//  1st book -> New Book -> authorId = ?
//  2nd book -> New Book -> authorId = ?
//
//  Get authors books
//  Authors books = select * from books where authorId = ?
//  The above can be done automaticaly by specifying which relations
//  To retrieve.
// 
// Each book has an authorId so One Author can have Many Books
// 
// If author was only allowed to have one Book you would use OneToOne Relation
// The Author would have a collumn for his book id. Because he is only allowed
// To have one book. Instead of the book, specifying the authorId on the Book;


@ObjectType()
@Entity("authors")
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({ length: 128, unique: true })
    name: string;

    @Field(type => [Book], { nullable: true })
    @OneToMany(type => Book, book => book.author)
    books: Book[]
}