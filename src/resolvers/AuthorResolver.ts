import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";


@Resolver()
export class AuthorResolver {

    @Query(type => [Author], { nullable: true })
    async authors() {
        // Pagination is required but this is
        // alright for demostration purposes
        return Author.find({ relations: ["books"] });
    }

    @Mutation(type => Author, { nullable: true })
    async addAuthor(@Arg("name") name: string) {
        return Author.create({ name }).save()
    }
}