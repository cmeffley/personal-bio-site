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
        name='contact'
        method='POST'
        data-netlify-recaptcha='true'
        data-netlify='true'
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
        <div data-netlify-recaptcha='true'></div>
        <Button outline color='primary' type='submit'>Send Message</Button>
      </Form>
    </>
  );
}

export default ContactForm;
