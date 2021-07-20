import React, { useState } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function MenuBar() {
  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    if(typeof name === 'string'){
      setActiveItem(name)
    }
  };

  const [activeItem, setActiveItem] = useState('')

    return (
        <Menu style={{marginTop: 0}} inverted secondary size='massive' color='teal'>
          <Menu.Item
            name='men'
            active={activeItem === 'Men'}
            onClick={handleItemClick}
          />
            <Menu.Item
              name='women'
              active={activeItem === 'Women'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='children'
              active={activeItem === 'Children'}
              onClick={handleItemClick}
            />
        </Menu>
    )
}