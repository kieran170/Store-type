import React, { useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default function MenuBar() {
  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    if(typeof name === 'string'){
      setActiveItem(name)
    }
  };

  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path)

    return (
      <>
        <Menu pointing secondary size='massive' color='teal' style={{marginBottom: '5px'}}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to={'/'}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='checkout'
              active={activeItem === 'checkout'}
              onClick={handleItemClick}
              as={Link}
              to={'/checkout'}
            />
          </Menu.Menu>
        </Menu>
        </>
    )
}