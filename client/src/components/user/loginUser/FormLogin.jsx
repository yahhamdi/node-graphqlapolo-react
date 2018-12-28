import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true,
});

class FormLogin extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;
    const {
      email, password,
    } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              input: {
                email,
                password,
              },
            },
          })
            .then(({ data: { loginUser } }) => {
              localStorage.setItem('token', loginUser.token);
              history.push('/profil');
            })
            .catch((e));
        }}
      >
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
        <button className="btn" type="submit">Connexion</button>
      </form>
    );
  }
}
export default FormLogin;
