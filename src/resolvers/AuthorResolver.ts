import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entity/Author";

@Resolver()
export class AuthorResolver {

    @Query(type => [Author], { nullable: true })
    async authors() {
        // Pagination is required but this is
        // alright for demostration purposes
        return Author.find();
    }

    @Mutation(type => Author, { nullable: true })
    async addAuthor(@Arg("name") name: string) {
        try {
            return await Author.create({ name }).save() // If not awaited doesen't catch error
        } catch (error) {
            // UNIQUE CONSTRAINT VIOLATION
            if (error.code == '23505') throw new Error("Specified author already exists.")
            
            else return null
        }
    }
}