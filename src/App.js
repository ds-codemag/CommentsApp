import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GET_COMMENTS } from './api';
import { connect } from 'react-redux';
import { fetchComments } from './store/comments/actions';

import { Container, Spinner } from 'react-bootstrap';
import Layout from './components/presentational/Layout';

import Home from './pages/Home';
import Comments from './pages/Comments';
import AddComment from './pages/AddComment';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    GET_COMMENTS().then(data => { this.props.fetchComments(data); }).then(() => { this.setState({loading: false}) });
  }

  render() {
    return this.state.loading ? (
      <Container className="text-center py-5">
        <Spinner animation="border" className="my-5" />
      </Container>
    ) : (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/add-comment">
              <AddComment />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
};

const mapDispatchToProps = {
  fetchComments
};

export const AppContainer = connect(null, mapDispatchToProps)(App);
