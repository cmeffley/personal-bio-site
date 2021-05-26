import React, { useState } from 'react';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';

function ContactForm() {
  const [edit, setEdit] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formInputChange = (e) => {
    setEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Form
        id='contact'
        name='contact'
        method='POST'
        data-netlify-recaptcha='true'
        data-netlify='true'
        onSubmit='submit'
        >
        <Input type='hidden'
          name='form-name'
          value='contact'
        />
        <Label>Name</Label>
        <Input
          name='name'
          type='text'
          value={edit.name}
          onChange={formInputChange}
        >
        </Input>
        <Label>Email</Label>
        <Input
          name='email'
          type='email'
          value={edit.email}
          onChange={formInputChange}
        >
        </Input>
        <Label>Message</Label>
        <Input
          name='message'
          type='textarea'
          value={edit.message}
          onChange={formInputChange}
        >
        </Input>
        <div data-netlify-recaptcha='true'></div>
        <Button outline color='primary' type='submit'>Send Message</Button>
      </Form>
    </>
  );
}

export default ContactForm;
