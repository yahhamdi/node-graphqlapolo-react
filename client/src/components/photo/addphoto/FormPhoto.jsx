/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });
class FormPhoto extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    photo: PropTypes.object,
  };

  static defaultProps = {
    photo: {},
  };

  state = {
    id: this.props.photo._id || '',
    url: this.props.photo.url || '',
    title: this.props.photo.title || '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;
    const { url, title, id } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              input: {
                url,
                title,
              },
              id,
            },
          })
            .then(() => history.push('/'))
            .catch((e));
        }}
      >
        <input
          name="url"
          type="text"
          onChange={this.handleInput}
          value={url}
          placeholder="url"
        />
        <input
          name="title"
          type="text"
          onChange={this.handleInput}
          value={title}
          placeholder="title"
        />
        <button className="btn" type="submit">Envoyer</button>
      </form>
    );
  }
}
export default FormPhoto;
