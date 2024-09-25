import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export default client;
