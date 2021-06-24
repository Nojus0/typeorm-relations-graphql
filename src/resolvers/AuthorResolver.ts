import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entity/Author";
import { Book } from "../entity/Book";


@Resolver()
export class AuthorResolver {

    @Query(type => [Author], { nullable: true })
    async authors() {
        return Author.find({});
    }

    @Mutation(type => Author, { nullable: true })
    async addAuthor(@Arg("name") name: string) {
        return Author.create({ name }).save()
    }
}