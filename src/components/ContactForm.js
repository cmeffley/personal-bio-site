import React from 'react';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';

function ContactForm() {
  return (
    <>
      <Form
        id='contact'
        // onSubmit={handleSubmit}
        >
        <Label>Name</Label>
        <Input
          name='name'
          type='text'
        >
        </Input>
        <Label>Email</Label>
        <Input
          name='email'
          type='text'
        >
        </Input>
        <Label>Message</Label>
        <Input
          name='message'
          type='textarea'
        >
        </Input>
        <Button outline color='primary' type='submit'>Submit</Button>
      </Form>
    </>
  );
}

export default ContactForm;
