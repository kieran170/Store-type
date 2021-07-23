import React, { useState, useContext } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

import { UserContext } from '../context';
export default function MenuBar() {

  const userContext = useContext(UserContext)

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    if(typeof name === 'string'){
      setActiveItem(name)
      userContext?.dispatch({
        type: 'SET_PAGE',
        page: name
      })
    }
  };

  const [activeItem, setActiveItem] = useState('')

  return (
      <Menu className='strap-container' inverted secondary size='massive' color='teal'>
        <Menu.Item
          name='Men'
          active={activeItem === 'Men' || userContext?.state.selectedPage === 'Men'}
          onClick={handleItemClick}
        />
          <Menu.Item
            name='Women'
            active={activeItem === 'Women' || userContext?.state.selectedPage === 'Women'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Electronics'
            active={activeItem === 'Electronics' || userContext?.state.selectedPage === 'Electronics'}
            onClick={handleItemClick}
          />
      </Menu>
  )
}