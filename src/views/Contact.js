import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Button } from 'semantic-ui-react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
    <Button className='open-contact-btn' inverted onClick={toggle}>Contact Me</Button>
    <Modal isOpen={modal} toggle={toggle} className='contact-modal'>
      <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
      <ModalBody>
        <ContactForm/>
      </ModalBody>
      <ModalFooter>
        <Button basic color='black' onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </>
  );
}

export default Contact;
