import React from 'react';
import { Layout, Menu } from 'antd';

import Logo from '../Components/Logo';
import Avatar from './Components/Avatar';
import './catalogue.css';
const { Header } = Layout;
const MenuItem = Menu.Item;

const videos = [
  {
    "_id": "5e8e80831525fc11d5187e2c",
    "name": "Movie 1",
    "image_cover_uri": "aksjdhaksjdhaskjdhakh",
    "trailer_uri": "asjdhaksjdhaskjd",
    "rating": 1.7708333333333335
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
]

const user = {
  first_name: "John",
  last_name: "Doe",
  password: "$2b$13$3GRH61qRsgb5wyNaE2ifG.QjCirNZZdtZmsElvOow221Z1RwLUbI2",
  email: "afsss@b.com",
  profile_img: "http://gravatar.com/avatar/61409aa1fd47d4a5332de23cbf59a36f?d=identicon"
}

function Catalogue() {

  return (
    <main className='catalogue'>
      <Header className='catalogue__header'>
        <div className='catalogue__menu-item'>
          <Logo />

          <Menu
            className='catalogue__menu'
            mode='horizontal'
            theme='light'
          >
            <MenuItem key='mi__home'>Inicio</MenuItem>
            <MenuItem key='mi__movies'>Películas</MenuItem>
            <MenuItem key='mi__series'>Series</MenuItem>
          </Menu>
        </div>

        <div>
          <Avatar user={user} />
        </div>
      </Header>
    </main>
  );
}

export default Catalogue;