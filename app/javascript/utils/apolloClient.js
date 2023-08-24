import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const baseURL = process.env.ROOT_URL;

const customFetch = (uri, options) => {
  const csrfToken = document
    .querySelector('meta[name=csrf-token]')
    .getAttribute('content');
  options.headers['X-CSRF-Token'] = csrfToken;
  return fetch(uri, options);
};

const link = createHttpLink({
  uri: `${baseURL}/graphql`,
  credentials: 'same-origin',
  fetch: customFetch,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
