/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

const HISTORY = createHistory({
  forceRefresh: true,
});

class FormUser extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  static defaultProps = {
    user: {},
  };

  state = {
    id: this.props.user._id || '',
    username: this.props.user.username || '',
    email: this.props.user.email || '',
    password: this.props.user.password || '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;


    const {
      username, email, password, id,
    } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              input: {
                username,
                email,
                password,
              },
              id,
            },
          })
            .then(() => HISTORY.push('/user'))
            .catch((e));
        }}
      >
        <input
          name="username"
          type="text"
          onChange={this.handleInput}
          value={username}
          placeholder="username"
        />
        <input
          name="email"
          type="text"
          onChange={this.handleInput}
          value={email}
          placeholder="email"
        />
        <input
          name="password"
          type="password"
          onChange={this.handleInput}
          value={password}
          placeholder="password"
        />
        <button className="btn" type="submit">Envoyer</button>
      </form>
    );
  }
}
export default FormUser;
