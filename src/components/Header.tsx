import React, { useState, useContext, useEffect} from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import { UserContext } from '../context';


export default function MenuBar() {

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    if(typeof name === 'string'){
      setActiveItem(name)
    }
  };

  const userContext = useContext(UserContext)
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if(userContext){
      setLength(Object.keys(userContext?.state.basket).length)
}
}, [userContext])



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
            <div className='basket-amount-container'>
              <p className='basket-amount-item'>{length}</p>
            </div>
            
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