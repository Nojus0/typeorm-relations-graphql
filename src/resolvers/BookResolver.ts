import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { In } from "typeorm";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";

@Resolver()
export class BookResolver {

    @Query(type => [Book], { nullable: true })
    async books() {
        return Book.find({ relations: ["authors"] });
    }

    @Mutation(type => Book, { nullable: true })
    async addBook(@Arg("title") title: string, @Arg("authors", type => [String]) authors: string[]) {

        const AUTHORS = await Author.find({
            where: { name: In(authors) },
        })

        if (AUTHORS.length < 1) throw new Error("Author does not exist!");

        return Book.create({ title, authors: AUTHORS }).save()
    }

    @Query(type => Book, { nullable: true })
    async book(@Arg("title") title: string) {
        return Book.findOne({ where: { title }, relations: ["authors"] });
    }

}