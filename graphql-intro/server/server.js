import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginInlineTrace } from "apollo-server-core";

const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello world",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginInlineTrace()],
});

const serverInfo = await server.listen({
    port: 4400
});

console.log("serverInfo", serverInfo.url);
