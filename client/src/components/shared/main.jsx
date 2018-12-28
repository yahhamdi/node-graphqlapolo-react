import React from 'react';
import { Route } from 'react-router-dom';
import ListPhotos from '../photo/listphotos';
import PhotoDetail from '../photo/photodetail';
import AddPhoto from '../photo/addphoto';
import ListUsers from '../user/listusers';
import UserDetail from '../user/userdetail';
import AddUser from '../user/adduser';
import LoginUser from '../user/loginUser/login';
import ProfileUser from '../user/profileuser/profile';


const Main = () => (
  <div>
    <Route exact path="/" component={ListPhotos} />
    <Route path="/add/photo" component={AddPhoto} />
    <Route path="/photo/:id" component={PhotoDetail} />
    <Route path="/user" component={ListUsers} />
    <Route path="/add/user" component={AddUser} />
    <Route path="/login/user" component={LoginUser} />
    <Route path="/users/:id" component={UserDetail} />
    <Route path="/profil" component={ProfileUser} />
  </div>
);
export default Main;
