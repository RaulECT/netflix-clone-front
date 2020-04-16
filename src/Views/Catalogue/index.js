import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../Components/Logo';
import Avatar from './Components/Avatar';
import CatalogueRoutes from './CatalogueRoutes';
import './catalogue.css';
const { Header } = Layout;
const MenuItem = Menu.Item;

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
            <MenuItem key='mi__home'>
              <Link to='/catalogue'>
                Inicio
              </Link>
            </MenuItem>

            <MenuItem key='mi__movies'>
              <Link to='/catalogue/movies'>
                Películas
              </Link>
            </MenuItem>

            <MenuItem key='mi__series'>
              <Link to='/catalogue/series'>
                Series
              </Link>
            </MenuItem>
          </Menu>
        </div>

        <div>
          <Avatar user={user} />
        </div>
      </Header>

      <CatalogueRoutes />
    </main>
  );
}

export default Catalogue;