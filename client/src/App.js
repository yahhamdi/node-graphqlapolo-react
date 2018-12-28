import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/Error/ErrorBoundary';
import Header from './components/shared/headers';
import Footer from './components/shared/footer';
import Main from './components/shared/main';
import Component from './style/style';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const token = localStorage.getItem('token');
const App = (props) => (
  <ApolloProvider client={client}>
    <Router>

      <div className={props.className}>
        <Header token={token} />
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
);
App.propTypes = {
  className: PropTypes.object.isRequired,
};
export default Component(App);
