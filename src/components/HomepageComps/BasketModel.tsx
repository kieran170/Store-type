import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Modal } from 'semantic-ui-react';
import { UserContext } from '../../context';
import { Item } from '../../types/contextTypes'


function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);
  const [length, setLength] = useState(0);
  const [items, setItems] = useState<[] | Item[]>([])
  const userContext = useContext(UserContext);

  useEffect(() => {
      if(userContext){
        setLength(Object.keys(userContext?.state.basket).length)
        setItems(Object.values(userContext?.state.basket))
  }
  }, [userContext])
  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>View Basket</Button>}
    >
      <Modal.Header>Basket</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Header>You currently have {length} items in you basket</Header>
          {items.map((item) => {
             return <p>{item.name}</p>
          })}
          <p>Total: ${userContext?.state.total} </p>
          <p>Does this look correct?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Continue Shopping
        </Button>
        <Button
          content="Go to Checkout"
          labelPosition='right'
          icon='checkmark'
          positive
          as={Link}
          to='/checkout'
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal