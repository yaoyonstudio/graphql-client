import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache()
});

const fragments = gql`{
  posts {
    id,
    title,
    author,
    cate,
    cateinfo {
      id,
      title,
      description
    },
    excerpt,
    content,
    createdAt,
    updatedAt
  }
}`

client.query({ query: fragments }).then(console.log);

class Posts extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Posts</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default Posts;
