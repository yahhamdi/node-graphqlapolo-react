/* eslint-disable no-underscore-dangle */
import { RESTDataSource } from 'apollo-datasource-rest';
import jwt from 'jsonwebtoken';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/api';
  }

  userReducer(user) {
    return {

      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,

    };
  }

  async getAllUsers() {
    const res = await this.get('users');

    return res.user;
  }

  async getProfilUser(token) {
    const decoded = jwt.verify(token, 'appsecret');
    const res = await this.get(`users/${decoded._id}`);
    return res.user;
  }

  async getUserById({ userId }) {
    const res = await this.get(`users/${userId}`);
    return this.userReducer(res.user);
  }

  async CreateUser({ input: { username: usernameArg, email: emailArg, password: passwordArg } }
  = {}) {
    const username = this.context && this.context.user ? this.context.user.username : usernameArg;
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    const password = this.context && this.context.user ? this.context.user.password : passwordArg;
    return this.post(
      'users',
      { input: { username, email, password } },
    );
  }

  async LoginUser({ input: { email: emailArg, password: passwordArg } }
  = {}) {
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    const password = this.context && this.context.user ? this.context.user.password : passwordArg;
    return this.post(
      'users/login',
      { input: { email, password } },
    );
  }

  async updateUser({
    id: idArg, input: { username: usernameArg, email: emailArg, password: passwordArg },
  } = {}) {
    const userId = this.context && this.context.user ? this.context.user.id : idArg;
    const username = this.context && this.context.user ? this.context.user.username : usernameArg;
    const email = this.context && this.context.user ? this.context.user.email : emailArg;
    const password = this.context && this.context.user ? this.context.user.password : passwordArg;
    return this.put(
      `users/${userId}`,
      { input: { username, email, password } },
    );
  }

  async deleteUser({ id: idArg }) {
    const userId = this.context && this.context.user ? this.context.user.id : idArg;
    return this.delete(
      `users/${userId}`,
    );
  }
}

export default UserAPI;
