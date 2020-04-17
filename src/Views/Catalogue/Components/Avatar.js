import React from 'react';
import { Avatar as AvatarImg, Menu, Dropdown } from 'antd';

const MenuItem = Menu.Item;

function Avatar({ user, onLogout }) {
  const { first_name, last_name, profile_img } = user;
  const menu = (
    <Menu>
      <MenuItem>
        <a onClick={onLogout}>Cerrar sesión</a>
      </MenuItem>
    </Menu>
  );

  return (
    <div className='catalogue__avatar'>
      <p>{`${first_name} ${last_name}`}</p>

      <Dropdown overlay={menu}>
        <AvatarImg
          src={profile_img}
          size={42}
        />
      </Dropdown>
    </div>
  );
}

export default Avatar