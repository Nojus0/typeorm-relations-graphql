import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";


@Resolver()
export class BookResolver {


    @Query(type => [Book], { nullable: true })
    async books() {
        return Book.find({ relations: ["author"] });
    }

    @Mutation(type => Book, { nullable: true })
    async addBook(@Arg("title") title: string, @Arg("authorName") authorName: string) {

        const author = await Author.findOne({ where: { name: authorName } });
        if (!author) throw new Error("Author does not exist!");

        return Book.create({ title, author }).save()
    }


}