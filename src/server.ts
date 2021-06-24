import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql";
import cors from "cors"
import cookieParser from "cookie-parser"
import { createConnection } from "typeorm";
import { config, ISDEV } from "./typeorm.config";
import { BookResolver } from "./resolvers/BookResolver";
import { AuthorResolver } from "./resolvers/AuthorResolver";
const port = process.env.PORT || 4000;

(async () => {
    const DATABASE = await createConnection(config);
    const app = express();
    app.use(cookieParser());
    app.use(cors({
        credentials: true,
        origin: process.env.FRONTEND_URL || "http://example.com"
    }));

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BookResolver, AuthorResolver]
        }),

        context: ({ req, res }) => ({ req, res }),
        playground: ISDEV,
        introspection: ISDEV
    });

    server.applyMiddleware({ app, cors: false });

    app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
})();

export interface IContext {
    req: Request  // Express
    res: Response
}

