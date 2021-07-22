import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function CheckoutForm() {
    return (
        <div>
                <Form className='form-container'>
                    <h2>Enter Delivery Address</h2>
                    <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Enter First Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Enter last Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Address</label>
                    <input placeholder='Enter address' />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='Confirm details are correct' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
    )
}
