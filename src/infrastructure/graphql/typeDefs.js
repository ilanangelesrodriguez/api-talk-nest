import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    bio: String
    profilePicture: String
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    likes: Int!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
  }

  type Query {
    me: User
    getPosts: [Post]
    getUser(id: ID!): User
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String
    createPost(content: String!): Post
    likePost(postId: ID!): Post
    commentPost(postId: ID!, content: String!): Comment
  }
`;

export default typeDefs;
